const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function
let x = 0;
let y = 0;
if (x < 300 && y < 200) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(600, 400);
  ctx.stroke();
} else if (x < 300 && y > 200) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(600, 0);
  ctx.stroke();
} else if (x > 300 && y < 200) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(0, 400);
  ctx.stroke();
} else {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(0, 0);
  ctx.stroke();
}
