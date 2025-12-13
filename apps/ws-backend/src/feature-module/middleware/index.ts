
import { WebSocket } from "ws";
import { JWT_SECRET } from "@repo/be-common/config";
import jwt from "jsonwebtoken";

export interface AuthWebSocket extends WebSocket {
    userId?: string
}

export function wsAuthMiddleware(ws: AuthWebSocket, request: any, next: () => void) {
    const url = request.url;
    if (!url) {
        ws.close(1008, "No url found");
        return;
    }

    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token");

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

