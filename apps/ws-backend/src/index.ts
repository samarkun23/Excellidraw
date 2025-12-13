import { WebSocketServer, WebSocket } from "ws";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "@repo/be-common/config"
import { Queue } from "bullmq";
import IORedis from 'ioredis'
import { AuthWebSocket, wsAuthMiddleware } from "./feature-module/middleware";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket,
  rooms: string[],
  userId: string
}

const users: User[] = [];

const connection = new IORedis({
  maxRetriesPerRequest: null,
  enableReadyCheck: false
});

const messageQueue = new Queue("messages", { connection });


wss.on('connection', function connection(ws: AuthWebSocket, request) {
  // console.log("ws connected!");
  // const url = request.url;
  // if (!url) {
  //   return;
  // }

  // console.log("GET THE TOKEN")
  // const queryParams = new URLSearchParams(url.split('?')[1]);
  // const token = queryParams.get('token') || "";
  // const userId = checkToken(token);
  // console.log("TOKEN", token);

  // if (!userId) {
  //   ws.close()
  //   return;
  // }
  wsAuthMiddleware(ws, request, () => {
    users.push({
      ws,
      userId: ws.userId!,
      rooms: [],
    })

    regiserMessageHandler(ws);
  })


})

function regiserMessageHandler(ws: AuthWebSocket) {

  ws.on('message', async (data) => {

    let parsedData;

    try {
      parsedData = typeof data === 'string' ? JSON.parse(data) : JSON.parse(data.toString());
    } catch (error) {
      console.log(`Error in parsing data ${error}`)
      return; 
    }
    

    if (parsedData.type === "join_room") {
      const user = users.find(x => x.ws === ws);
      user?.rooms.push(parsedData.roomId);
      return
    }

    if (parsedData.type === "chat") {
      const user = users.find(u => u.ws === ws);
      if (!user) {
        return; 
      }

      if (!user.rooms.includes(parsedData.roomId)) {
        return; 
      }

      const roomId = parsedData.roomId;
      const message = parsedData.message;

      messageQueue.add("store-message", {
        roomId: Number(roomId),
        userId: ws.userId,
        message,
      }).then((job) => console.log("JOB ADDED:", job.id));

      users.forEach(user => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(JSON.stringify({
            type: "chat",
            message: message,
            roomId
          }))
        }
      })
      return ;

    }

    if (parsedData.type === "leave_room") {
      const user = users.find(x => x.ws === ws);
      if (!user) { return }
      //@ts-ignore
      user.rooms = user?.rooms.filter(x => x !== parsedData.room);
      return;
    }

  })

  ws.on("close",() => {
    //finding the element where their index is === current ws if find it it's return index if did'nt find it it's return -1 ;
    const index = users.findIndex(u => u.ws === ws);

    if (index !== -1) {
      users.splice(index,1);// removing   the index of the user 
    }
  })

}

