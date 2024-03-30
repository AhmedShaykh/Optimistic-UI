"use server";
import { createTodo, updateTodo } from "@/lib/todos";
import { FormDataSchema } from "@/lib/zodSchema";
import { schema } from "@/lib/formSchema";
import { revalidatePath } from "next/cache";

export async function createTodoAction(title: string) {

    try {

        await createTodo(title);

    } catch (error: any) {

        return { error: error?.message || "Failed To Add Todo." };

    } finally {

        revalidatePath("/");

    }

};

export async function updateTodoAction(id: string, isCompleted: boolean) {

    try {

        await updateTodo(id, isCompleted);

    } catch (error: any) {

        return { error: error?.message || "Failed To Update Todo." };

    } finally {

        revalidatePath("/");

    }

};

export async function addFormEntry(state: any, data: FormData) {

    const result = FormDataSchema.safeParse({
        name: data.get("name"),
        message: data.get("message")
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (result.success) return { data: result.data };

    if (result.error) return { error: result.error.format() };

};

export type FormState = {
    message: string;
    fields?: Record<string, string>;
    issues?: string[];
};

export async function onSubmitAction(
    prevState: FormState,
    data: FormData
): Promise<FormState> {

    const formData = Object.fromEntries(data);

    const parsed = schema.safeParse(formData);

    if (!parsed.success) {

        const fields: Record<string, string> = {};

        for (const key of Object.keys(formData)) {
            fields[key] = formData[key].toString();
        };

        return {
            message: "Invalid Form Data",
            fields,
            issues: parsed.error.issues.map((issue) => issue.message)
        };

    }

    if (parsed.data.email.includes("x")) {

        return {
            message: "Invalid Email",
            fields: parsed.data
        };

    }

    return { message: "User Registered" };

};