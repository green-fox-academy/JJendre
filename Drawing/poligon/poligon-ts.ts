const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};
let prevWidth = 0;
let prevHeight = 0;

let drawBackgroundBig = () => {
  ctx.clearRect(0, 0, prevWidth, prevHeight);
  ctx.save();

  let newHeight = parseInt(myRange1.value);
  // console.log(heightSlider.value);

  let newWidth = parseInt("myRange2".value);
  // console.log(widthSlider.value);

  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, newWidth, newHeight);
  ctx.stroke();
  ctx.save();

  prevWidth = newWidth;
  prevHeight = newHeight;
};
myRange1.onchange = () => {
  drawBackgroundBig();
};
myRange2.onchange = () => {
  drawBackgroundBig();
};
