const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop

function drawlinetothecentre(x: number, y: number) {
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x + 70 * i, y + 15 * i);
    ctx.lineTo(300, 200);
    ctx.stroke();
  }
}
drawlinetothecentre(20, 200);
