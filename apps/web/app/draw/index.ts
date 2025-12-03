import axios from "axios";
import { HTTP_BACKEND } from "../../config";

type Shape = {
    type: "rect";
    x: number;
    y: number;
    width: number;
    height: number;
} | {
    type: 'circle';
    centerX: number;
    centerY: number;
    radius: number;
}

export async function initDraw(canvas: HTMLCanvasElement, roomId : string) {
    const context = canvas.getContext("2d");

    const existingShapes: Shape[] = await getExistingShapes(roomId);

    if (!context) {
        return
    }

    clearCanvas(existingShapes, canvas, context);

    let clicked = false;

    let startX = 0;
    let startY = 0;

    canvas.addEventListener("mousedown", (e) => {
        clicked = true;
        startY = e.clientY
        startX = e.clientX
    })

    canvas.addEventListener("mouseup", (e) => {
        clicked = false
        const width = e.clientX - startX;
        const height = e.clientY - startY;
        existingShapes.push({
            type: "rect",
            x: startX,
            y: startY,
            height,
            width
        })
    })

    canvas.addEventListener("mousemove", (e) => {

        if (clicked) {
            const width = e.clientX - startX;
            const height = e.clientY - startY;

            clearCanvas(existingShapes, canvas, context);

            context.strokeStyle = "rgba(255, 255, 255)"

            context.strokeRect(startX, startY, width, height);
        }
    })
}

// so creating a function bec when the can is clear i don't wanna move my existing screen shape
function clearCanvas(existingShapes: Shape[], canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {

    context.clearRect(0, 0, canvas.width, canvas.height);
    //fill the black background
    context.fillStyle = "rgba(0, 0, 0)"
    context.fillRect(0, 0, canvas.width, canvas.height);

    existingShapes.map((shape) => {
        if (shape.type === 'rect') {
            context.strokeStyle = "rgba(255, 255, 255)"
            context.strokeRect(shape.x, shape.y, shape.width, shape.height);
        }
    })
}

async function getExistingShapes(roomId: string){
    const res = await axios.get(`${HTTP_BACKEND}/excallidraw/room/chats/${roomId}`);
    const messages = res.data.messages;
   
    const shapes = messages.map((x: {message: string}) => {
        const messageData = JSON.parse(x.message); 
        return messageData;
    })

    return shapes;  
}