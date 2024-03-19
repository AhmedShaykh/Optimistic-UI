"use server";
import { createTodo, updateTodo } from "@/lib/todos";
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