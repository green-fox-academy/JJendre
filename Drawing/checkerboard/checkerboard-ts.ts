const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern
function checkerboard(x: number, y: number, a: number) {
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      if ((i % 2 === 0 && j % 2 != 0) || (i % 2 != 0 && j % 2 === 0)) {
        //set delay for fun
        setTimeout(function timer() {
          ctx.fillStyle = "black";
          ctx.fillRect(x * i, y * j, a, a);
        }, i * 300); // delay time
      } else {
        // set delay for fun
        setTimeout(function timer() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x * i, y * j, a, a);
        }, j * 300); // delay time
      }
    }
  }
}
checkerboard(40, 40, 40);
