const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]
function purplesteps3d(a: number, xy: number) {
  ctx.strokeStyle = "blue";
  ctx.fillStyle = "purple";

  ctx.strokeRect(xy, xy, a, a);
  ctx.fillRect(xy, xy, a, a);
}
for (let i = 1; i < 6; i++) {
  setTimeout(function timer() {
    purplesteps3d(15 + 20 * i, 5 * i + (20 * Math.pow(i, 2)) / 2);
  }, i * 300);
}
