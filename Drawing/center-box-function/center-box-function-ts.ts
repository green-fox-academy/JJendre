const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter and draws one square
// Parameter: the square size
// The function shall draw a square of that size to the center of the canvas
// Draw at least 3 squares with that function.
// (the squares should not be filled otherwise they will hide each other)
// Avoid code duplication!

function centerbox(a: number) {
  ctx!.strokeStyle = "blue";
  ctx!.strokeRect(600 / 2 - a / 2, 400 / 2 - a / 2, a, a);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function timer() {
    centerbox(300 - i * 100);
  }, i * 800);
}
