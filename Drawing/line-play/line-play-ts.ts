const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

function Drawpurpleline(x: number, y: number) {
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
function Drawgreenline(x: number, y: number) {
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
