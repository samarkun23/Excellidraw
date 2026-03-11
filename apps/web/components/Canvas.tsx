"use client"
import { useEffect, useRef, useState } from "react";
import { initDraw } from "../app/draw";
import { CanvasMenuRec, Tool } from "./CanvasMenu";
import { Draw } from "../app/draw/Draw";
import { CanvasShareMenu } from "./CanvasShareMenu";

export function Canvas({
    isLocalCanvas,
    mode,
    roomId,
    socket }: {
        isLocalCanvas: boolean,
        mode: "collab" | "personal",
        roomId?: string,
        socket?: WebSocket
    }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [draw, setDraw] = useState<Draw>();
    const [selectedTool, setSelectedTool] = useState<Tool>("rect");
    const [size, setSize] = useState({ width: 0, height: 0 });

    // screen size
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    //tool change
    useEffect(() => {
        draw?.setTool(selectedTool);
    }, [selectedTool, draw])


    // init draw engine
    useEffect(() => {
        if (!canvasRef.current) return;
        if (size.width === 0 || size.height === 0) return;

        let g: Draw;
        if (mode === 'personal') {
            g = new Draw(canvasRef.current);
        } else if (mode === 'collab') {
            g = new Draw(canvasRef.current, roomId, socket);
        } else {
            console.warn("Collab mode requires roomId and socket");
            return;
        }

        setDraw(g)
        return () => {
            g.destroy();
        }

    }, [canvasRef, mode, roomId, socket, size]);



    return <div className="relative h-[100vh] overflow-hidden">

        <canvas ref={canvasRef} height={`${size.height}`} width={`${size.width}`} className="absolute top-0 left-0">

        </canvas>
        <div>
            <div className=" top-4 left-1/2 -translate-x-1/2 z-10 bg-gray-800 h-12 w-80 flex justify-evenly rounded-xl fixed">
                <CanvasMenuRec selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
            </div>
            <div className=" top-4 right-4 z-10 bg-gray-800 h-12 w-32 flex justify-evenly rounded-xl fixed">
                <CanvasShareMenu isLocalCanvas={isLocalCanvas} />
            </div>
        </div>

    </div>
}