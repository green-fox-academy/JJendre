const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50-long long horizontal line from that point
// Draw at least 3 lines with that function using a loop
function Drawpurpleline(x, y) {
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(390, y);
  ctx.lineTo(x, 10);
  ctx.stroke();
}
for (let i = 1; i < 16; i++) {
  for (let j = 1; j < 16; j++) {
    if (i + j === 16) {
      Drawpurpleline(390 - 25 * i, 10 + 25 * j);
    }
  }
}
function Drawgreenline(x, y) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(10, y);
  ctx.lineTo(x, 390);
  ctx.stroke();
}
for (let i = 1; i < 16; i++) {
  for (let j = 1; j < 16; j++) {
    if (i + j === 16) {
      Drawgreenline(380 - 25 * i, 5 + 25 * j);
    }
  }
}
