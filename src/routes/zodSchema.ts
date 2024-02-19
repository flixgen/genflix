import { z } from "zod";

export const emailSchema = z.string().email()

// z.object({
//     email: z.string().email().trim().toLowerCase()

// });