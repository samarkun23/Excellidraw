import { z } from "zod";

export const registerSchema = z.object({
    username: z.string().min(3, "Username should be 3 digit longer"),
    email: z.string().email(),
    password: z.string().min(6, "Password must be 6 digit longer")
})

export const loginSchema = z.object({
    username: z.string().min(3).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6)
})
.refine(
    (data) => data.username || data.email,
    {
        message: "Eithe email or username is required",
        path: ["email"],
    }
)

export const createRoomSchema = z.object({
    name: z.string().min(3).max(20)
})