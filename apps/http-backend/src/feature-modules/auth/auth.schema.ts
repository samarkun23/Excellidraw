import * as z from 'zod'

export const registerSchema = z.object({
    username: z.string().min(3, "Username should be 3 digit longer"),
    email: z.string().email().min(8, "Email should be 8 digit longer"),
    password: z.string().min(6, "Password must be 6 digit longer")
})

export const loginSchema = z.object({
    username: z.string().email().optional(),
    email: z.string().min(8).optional(),
    password: z.string().min(6)
})
.refine(
    (data) => data.username || data.email,
    {
        message: "Eithe email or username is required",
        path: ["email"],
    }
)