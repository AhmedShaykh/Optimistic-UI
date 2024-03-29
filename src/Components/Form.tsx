"use client";
import { useFormState, useFormStatus } from "react-dom";
import { addFormEntry } from "@/app/actions";

const Form = () => {

    const [state, formAction] = useFormState(addFormEntry, null);

    return (
        <div className="flex gap-6">
            <form
                className="flex flex-1 flex-col gap-4 sm:w-1/2"
                key={Math.random()}
                action={formAction}
            >
                <input
                    className="px-4 py-3 text-md rounded-md"
                    placeholder="Enter Name"
                    name="name"
                />

                <input
                    className="px-4 py-3 text-md rounded-md"
                    placeholder="Enter Message"
                    name="message"
                />

                <SubmitButton />
            </form>

            <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white">
                <pre>{JSON.stringify(state, null, 2)}</pre>
            </div>
        </div>
    )
};

function SubmitButton() {

    const { pending } = useFormStatus();

    return (
        <button
            className="rounded-lg bg-black py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={pending}
        >
            {pending ? "Submitting..." : "Submit"}
        </button>
    )
};

export default Form;