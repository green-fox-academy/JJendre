const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
function centerbox(a: number, color) {
  ctx!.strokeStyle = color;

  ctx!.strokeRect(600 / 2 - a / 2, 400 / 2 - a / 2, a, a);
}

for (let i = 0; i < 10; i++) {
  setTimeout(function timer() {
    centerbox(
      400 - i * 50,
      `rgb(${255 - 42 * i}, ${0 + 82 * i},${0 + 42 * i})`
    );
  }, i * 800);
}
