
import { WebSocket } from "ws";
import { JWT_SECRET } from "@repo/be-common/config";
import jwt from "jsonwebtoken";

export interface AuthWebSocket extends WebSocket {
    userId?: string
}

export function wsAuthMiddleware(ws: AuthWebSocket, request: any, next: () => void) {
    
    const cookiesHeader = request.headers.cookie || "";

    //@ts-ignore
    const token = cookiesHeader.split(';').map(c => c.trim()).find(c => c.startsWith('token='))?.split('=')[1];

    if (!token) {
        ws.close(1008, "Token not found");
        return;
    }

    try{
        const decoded: any = jwt.verify(token, JWT_SECRET);
        
        if (!decoded.userId) {
            ws.close(1008, "Invalid token");
            return
        }

        ws.userId = decoded.userId
        next();
    }catch{
        ws.close(1008, "Unauthorized");
    }

}

