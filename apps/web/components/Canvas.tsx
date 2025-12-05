import { useEffect, useRef } from "react";
import { initDraw } from "../app/draw";

export function Canvas({roomId, socket} : {roomId : string, socket: WebSocket}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {

        if (canvasRef.current) {
             
            initDraw(canvasRef.current, roomId, socket );
        }

    }, [canvasRef]);

    return <div>
        <canvas ref={canvasRef} height={10000} width={10000}>

        </canvas>
        <div className="absolute bottom-0 right-0">
            <button className="bg-white text-black m-3">Rect</button>
            <button className="bg-white text-blue-400 m-3">Circle</button>
        </div>
    </div>
}