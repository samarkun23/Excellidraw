import { Router } from "express";
import { authMiddleware } from "../middleware/authmiddleware";
import { createRoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";

export const roomRouter: Router = Router()

roomRouter.post("/", authMiddleware, async (req, res) => {
    const parseData = createRoomSchema.safeParse(req.body);

    if (!parseData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    //@ts-ignore
    const userId = req.userId;

    try {
        const room = await prismaClient.roomSchema.create({
            data: {
                slug: parseData.data.name,
                adminId: userId
            }
        })

        res.json({
            roomId: room.id
        })

    } catch (error) {
        res.status(401).json({
            message: "Room already exist"
        })
        console.log("Room already exist", error);
    }


})