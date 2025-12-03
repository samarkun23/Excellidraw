"use client"
import { useEffect, useRef } from "react"
import { initDraw } from "../../draw";

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);


    useEffect(() => {

        if (canvasRef.current) {
            

            initDraw(canvasRef.current);
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
