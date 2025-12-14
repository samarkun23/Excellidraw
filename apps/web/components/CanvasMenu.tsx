"use client"

import { Circle, Minus, Square } from "lucide-react"
import { ReactNode } from "react"

export type Tool = 'circle' | 'rect' | 'line'

function IconButton({ icon, onClick, activated }: { icon: ReactNode, onClick: () => void, activated: boolean }) {
    return <div onClick={onClick} className={`pointer hover:bg-black rounded-xl ${activated ? "text-blue-400" : "text-white"}`}>
        {icon}
    </div>
}

export function CanvasMenuRec({ selectedTool, setSelectedTool }: { selectedTool: Tool, setSelectedTool: (s: Tool) => void }) {
    return (
        <div className="flex items-center gap-10">

            <IconButton
                activated={selectedTool === 'circle'}
                onClick={() => {
                    setSelectedTool('circle')
                }}
                icon={<Circle />}
            />

            <IconButton
                activated={selectedTool === 'line'}
                onClick={() => {
                    setSelectedTool('line')
                }}
                icon={<Minus />}
            />

            <IconButton
                activated={selectedTool === 'rect'}
                onClick={() => {
                    setSelectedTool('rect')
                }}
                icon={<Square />}
            />

        </div>
    )
}

