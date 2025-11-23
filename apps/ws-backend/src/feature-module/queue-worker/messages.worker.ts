import { Worker } from "bullmq";
import IORedis from 'ioredis';
import { prismaClient } from "@repo/db/client"

const connection = new IORedis();

const worker = new Worker("messages", async(job) => {
    const data = job.data;

    await prismaClient.chatSchema.create({
        data: {
            roomId: data.roomId,
            userId: data.userId,
            message: data.message
        }
    })
}, {connection})

worker.on("completed", () => console.log(`Message stored in DB`));