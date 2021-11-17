const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas
for (let i = 1; i < 10; i++) {
  setTimeout(function timer() {
    let a = 1 + i;
    ctx.fillStyle = "green";
    let x = 600 / 2 - a / 2;
    let y = 400 / 2 - a / 2;
    ctx.fillRect(x, y, a, a);
  }, i * 100);
}
