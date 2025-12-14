import { useEffect, useRef, useState } from "react";
import { initDraw } from "../app/draw";
import { CanvasMenuRec, Tool } from "./CanvasMenu";
import { Draw } from "../app/draw/Draw";

export function Canvas({ roomId, socket }: { roomId: string, socket: WebSocket }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [draw , setDraw] = useState<Draw>();
    const [selectedTool, setSelectedTool] = useState<Tool>("rect");

    useEffect(() => {
        draw?.setTool(selectedTool);
    }, [selectedTool , draw])


    useEffect(() => {

        if (canvasRef.current) {
            const g = new Draw(canvasRef.current , roomId , socket);
            setDraw(g)
            return() => {
                g.destroy();
            }
        }


    }, [canvasRef]);

    const width = window.innerWidth;
    const height = window.innerHeight;


    return <div className="relative h-[100vh] overflow-hidden">

        <canvas ref={canvasRef} height={`${height}`} width={`${width}`} className="absolute top-0 left-0">

        </canvas>
        <div className=" top-4 left-1/2 -translate-x-1/2 z-10 bg-gray-500 h-12 w-80 flex justify-evenly rounded-xl fixed">
            <CanvasMenuRec selectedTool={selectedTool} setSelectedTool={setSelectedTool}/>
        </div>

    </div>
}