import { z } from "zod";

export const schema = z.object({
    first: z.string().trim().min(1, {
        message: "First Name Is Required."
    }),
    last: z.string().trim().min(1, {
        message: "Last Name Is Required."
    }),
    email: z.string().trim().email({
        message: "Invalid Email Address."
    })
});