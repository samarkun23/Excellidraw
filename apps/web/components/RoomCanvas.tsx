'use client'

import { useEffect, useRef, useState } from "react";
import { WS_URL } from "../config";
import { Canvas } from "./Canvas";


export function RoomCanvas({roomId}: {roomId: string}) {
    
    const [socket , setSocket] = useState<WebSocket | null>(null);


    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMGY5MWM2Yi02YWEyLTQ3MWQtYjgyMi1jZjM0ZjcxMTlhZjciLCJpYXQiOjE3NjU2MTQ2MjUsImV4cCI6MTc2NjIxOTQyNX0.Wix2caW5bi9ZNmP5Pnw81AeZK1XAws6kwv-pijTj6Bo`)

        ws.onopen = () => {
           setSocket(ws)
           ws.send(JSON.stringify({
            type: "join_room",
            roomId
           }))
        }

    },[])



    if (!socket) {
        return <div>
            connecting to server...
        </div> 
    }


    return <div >
        <Canvas roomId={roomId} socket={socket} />

    </div>
}