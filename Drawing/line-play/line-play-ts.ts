const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

function Drawpurpleline(x: number, y: number): void {
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(400, y);
  ctx.lineTo(x, 0);
  ctx.stroke();
}
for (let i = 1; i < 16; i++) {
  for (let j = 1; j < 16; j++) {
    if (i + j === 16) {
      Drawpurpleline(400 - 25 * i, 0 + 25 * j);
    }
  }
}
function Drawgreenline(x: number, y: number) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(x, 400);
  ctx.stroke();
}
for (let i = 1; i < 16; i++) {
  for (let j = 1; j < 16; j++) {
    if (i + j === 16) {
      Drawgreenline(400 - 25 * i, 5 + 25 * j);
    }
  }
}
