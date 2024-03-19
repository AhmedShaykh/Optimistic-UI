"use client";
import React, { useOptimistic, useRef } from "react";
import { createTodoAction } from "@/app/actions";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import TodoItem from "./TodoItem";
import { useFormStatus } from "react-dom";
import { Todo } from "@prisma/client";
import { toast } from "sonner";

const Todos = ({ todos }: any) => {

    const formRef = useRef<HTMLFormElement>(null);

    const [optimisticTodos, addOptimisticTodo] = useOptimistic(
        todos,
        (state, newTodo: Todo) => {
            return [...state, newTodo]
        }
    );

    async function action(data: FormData) {

        const title = data.get("title");

        if (typeof title !== "string" || !title) return;

        const newTodo = {
            id: crypto.randomUUID(),
            title,
            isCompleted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        formRef.current?.reset();

        addOptimisticTodo(newTodo);

        const result = await createTodoAction(title);

        if (result?.error) {
            toast.error(result.error)
        }

    };

    return (
        <div>
            <form
                ref={formRef}
                action={action}
                className="flex"
            >
                <Input type="text" name="title" placeholder="Add A New Todo" />
                <SubmitButton />
            </form>

            <h2 className="mt-10 border-b pb-2 text-lg font-bold">
                Previous Todos:
            </h2>

            <ul className="mt-4 flex flex-col gap-3">
                {optimisticTodos?.map((todo: any) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
};

function SubmitButton() {

    const { pending } = useFormStatus();

    return (
        <Button type="submit" className="ml-2" disabled={pending}>
            Add Todo
        </Button>
    )
};

export default Todos;