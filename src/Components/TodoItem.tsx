"use client";
import { useOptimistic, useTransition } from "react";
import { updateTodoAction } from "@/app/actions";
import { Checkbox } from "@/Components/ui/checkbox";
import { Label } from "@/Components/ui/label";
import { formatDate } from "@/lib/utils";
import { toast } from "sonner";

const TodoItem = ({ todo }: any) => {

    const [isPending, startTransition] = useTransition();

    const [optimisticTodo, updateTodo] = useOptimistic(
        todo,
        (
            todo,
            { isCompleted, updatedAt }: { isCompleted: boolean; updatedAt: Date }
        ) => {
            return { ...todo, isCompleted, updatedAt }
        }
    );

    async function handleChange(isCompleted: boolean) {

        const updatedAt = new Date();

        updateTodo({ isCompleted, updatedAt });

        const result = await updateTodoAction(optimisticTodo.id, isCompleted);

        if (result?.error) {

            toast.error(result.error);

        }

    };

    return (
        <li className="flex items-center gap-3">
            <Checkbox
                id={optimisticTodo.id}
                className="peer"
                defaultChecked={optimisticTodo.isCompleted}
                checked={optimisticTodo.isCompleted}
                onCheckedChange={checked =>
                    startTransition(() => handleChange(checked as boolean))
                }
            />

            <Label
                className="cursor-pointer peer-data-[state=checked]:text-gray-500 peer-data-[state=checked]:line-through"
                htmlFor={optimisticTodo.id}
            >
                {optimisticTodo.title}
            </Label>

            <span className="ml-auto text-sm text-gray-400 peer-data-[state=checked]:text-gray-500 peer-data-[state=checked]:line-through">
                {formatDate(optimisticTodo.updatedAt)}
            </span>
        </li>
    )
};

export default TodoItem;