const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center
function fntocenter(x: number, y: number) {
  for (let i = 0; i <= 600; i = i + 20) {
    for (let j = 0; j <= 400; j = j + 20) {
      if (i >= 0 && j === 0) {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x + i, y);
        ctx.lineTo(300, 200);
        ctx.stroke();
      } else if (i === 600 && j >= 0) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(x + i, y + j);
        ctx.lineTo(300, 200);
        ctx.stroke();
      } else if (i >= 0 && j === 400) {
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(x + i, y + j);
        ctx.lineTo(300, 200);
        ctx.stroke();
      } else if (i === 0 && j > 0) {
        ctx.strokeStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(x + i, y + j);
        ctx.lineTo(300, 200);
        ctx.stroke();
      }
    }
  }
}
fntocenter(0, 0);
