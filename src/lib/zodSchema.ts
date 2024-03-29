import { z } from "zod";

export const FormDataSchema = z.object({
    name: z.string().min(1, "Name Is Required."),
    message: z.string().min(1, "Message Is Required")
});