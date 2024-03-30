"use client";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { onSubmitAction } from "@/app/actions";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { schema } from "@/lib/formSchema";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { X } from "lucide-react";
import { z } from "zod";

const MailForm = () => {

    const [state, formAction] = useFormState(onSubmitAction, {
        message: "",
    });

    const form = useForm<z.output<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            first: "",
            last: "",
            email: "",
            ...(state?.fields ?? {})
        }
    });

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <>
            <h1 className="mb-10 px-2 text-3xl text-center font-bold">
                Form Actions
            </h1>

            <Form {...form}>
                {state?.message !== "" && !state.issues && (
                    <div className="text-red-500">{state.message}</div>
                )}
                {state?.issues && (
                    <div className="text-red-500">
                        <ul>
                            {state.issues.map((issue) => (
                                <li key={issue} className="flex gap-1">
                                    <X fill="red" />
                                    {issue}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <form
                    ref={formRef}
                    className="space-y-8"
                    action={formAction}
                    onSubmit={(evt) => {
                        evt.preventDefault();
                        form.handleSubmit(() => {
                            formAction(new FormData(formRef.current!));
                        })(evt);
                    }}
                >
                    <FormField
                        control={form.control}
                        name="first"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter First Name" {...field} />
                                </FormControl>
                                <FormDescription>Your First Name</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="last"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Last Name " {...field} />
                                </FormControl>
                                <FormDescription>Your Last Name</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Email Address" {...field} />
                                </FormControl>
                                <FormDescription>Your Email Address</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
};

export default MailForm;