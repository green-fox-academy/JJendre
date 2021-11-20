const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

function triangles(steps:number) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, 400);
  ctx.lineTo(0 + steps, 400);
  ctx.lineTo(
    0 + steps / 2,
    400 - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
  );
  ctx.lineTo(0, 400);
  ctx.stroke();
}
for (let i = 0; i < 20; i++) {
  triangles(20 + 20 * i);
}

function trianglesrear(steps:number) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(400, 400);
  ctx.lineTo(400 - steps, 400);
  ctx.lineTo(
    400 - steps / 2,
    400 - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
  );
  ctx.lineTo(400, 400);
  ctx.stroke();
}
for (let i = 0; i < 20; i++) {
  trianglesrear(20 + 20 * i);
}

function horizontalline(steps:number) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(0+steps/2, 400-Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)));
    ctx.lineTo(400 - steps/2,400-Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))) );
    
    ctx.stroke();
  }
  for (let i = 0; i < 20; i++) {
    horizontalline(20 + 20 * i);}