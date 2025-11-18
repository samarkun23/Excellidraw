import { Request, Response } from "express";

export const authService = {
    signUp: async(req: Request,res: Response) => {
        const {userName , email , password} = req.body();

    },

    login: async(req: Request,res: Response) => {
        const {userName , email , password} = req.body();
    }
}