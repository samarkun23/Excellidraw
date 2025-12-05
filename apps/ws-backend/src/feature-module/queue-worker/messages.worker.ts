import { tryCatch, Worker } from "bullmq";
import IORedis from 'ioredis';
import { prismaClient } from "@repo/db/client"

console.log("Entering ")
const connection = new IORedis({
    maxRetriesPerRequest: null,
    enableReadyCheck: false
});

const worker = new Worker("messages", async (job) => {
    console.log("Connecton message queue")
    try{
        const data = job.data;
        console.log(data)
    
        await prismaClient.chatSchema.create({
            data: {
                roomId: data.roomId,
                userId: data.userId,
                message: data.message
            }
        })

    }catch(e){
        console.log("DB ERROR : ", e);
    }
}, { connection })

worker.on("completed", () => console.log(`Message stored in DB`));