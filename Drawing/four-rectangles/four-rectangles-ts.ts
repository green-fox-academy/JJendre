const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!
function drawcoloredrectangle(color, x, y, a, b) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, a, b);
}
drawcoloredrectangle("green", 10, 150, 150, 50);
drawcoloredrectangle("red", 200, 150, 100, 60);
drawcoloredrectangle("purple", 10, 300, 80, 70);
drawcoloredrectangle("silver", 200, 300, 70, 80);
