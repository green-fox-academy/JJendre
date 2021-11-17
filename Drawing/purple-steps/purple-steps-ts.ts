const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]
function purplesteps(a: number, xy: number) {
  ctx.strokeStyle = "blue";
  ctx.fillStyle = "purple";

  ctx.strokeRect(xy, xy, a, a);
  ctx.fillRect(xy, xy, a, a);
}
for (let i = 0; i < 13; i++) {
  setTimeout(function timer() {
    purplesteps(25, 25 + 26 * i);
  }, i * 300);
}
