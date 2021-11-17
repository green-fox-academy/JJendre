const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50-long long horizontal line from that point
// Draw at least 3 lines with that function using a loop
function Drawhorisontal(x, y) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y);
  ctx.stroke();
}

for (let i = 1; i < 5; i++) {
  Drawhorisontal(10 + 10 * i, 120 + 15 * i);
}
