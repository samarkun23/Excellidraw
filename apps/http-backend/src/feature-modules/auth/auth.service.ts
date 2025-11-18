import { Request, Response } from "express";
import { registerSchema, loginSchema , createRoomSchema } from "@repo/common/types";

export const authService = {
    signUp: async(req: Request,res: Response) => {
        const data = registerSchema.safeParse(req.body);
        if(!data.success){
            res.json({
                message: "Incorrect Input"
            })
            return;
        }

        const {userName , email , password} = req.body();

    },

    login: async(req: Request,res: Response) => {
        const {userName , email , password} = req.body();
    }
}