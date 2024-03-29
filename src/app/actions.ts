"use server";
import { createTodo, updateTodo } from "@/lib/todos";
import { FormDataSchema } from "@/lib/zodSchema";
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