
export function initDraw(canvas: HTMLCanvasElement) {
    const context = canvas.getContext("2d");

    if (!context) {
        return
    }

    context.fillStyle = "rgba(0, 0, 0)"
    context.fillRect(0, 0, canvas.width, canvas.height);


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
        console.log(e.clientX)
        console.log(e.clientY)
    })

    canvas.addEventListener("mousemove", (e) => {

        if (clicked) {
            const width = e.clientX - startX;
            const height = e.clientY - startY;

            context.clearRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = "rgba(0, 0, 0)"
            context.fillRect(0, 0, canvas.width, canvas.height);



            context.strokeStyle = "rgba(255, 255, 255)"

            context.strokeRect(startX, startY, width, height);
        }
    })
}