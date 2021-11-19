const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 400; i++) {
  setTimeout(function timer() {
    ctx.fillStyle = `rgb(${getRandomInt(200, 255)}, ${getRandomInt(
      200,
      255
    )},${getRandomInt(150, 255)})`;
    ctx.fillRect(
      getRandomInt(0, 600),
      getRandomInt(0, 400),
      getRandomInt(1, 2),
      getRandomInt(1, 2)
    );
  }, i * 200);
}
