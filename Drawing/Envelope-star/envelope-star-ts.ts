const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

const dividecanvas: number = 2;
function Drawlines(canvassize: number, step: number): void {
  let linelength: number = Math.sqrt(
    Math.pow(canvassize, 2) + Math.pow(step, 2)
  );
  //downleft
  for (let i = 0; i < 21; i++) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(canvassize, canvassize + canvassize - i * step);
    ctx.lineTo(
      canvassize -
        Math.sqrt(Math.pow(linelength, 2) - Math.pow(canvassize, 2)) * i,
      canvassize
    );
    ctx.stroke();
  }
  //upperright
  for (let i = 0; i < 21; i++) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(canvassize + canvassize - i * step, canvassize);
    ctx.lineTo(
      canvassize,
      canvassize -
        Math.sqrt(Math.pow(linelength, 2) - Math.pow(canvassize, 2)) * i
    );
    ctx.stroke();
  }
  //upperleft
  for (let i = 0; i < 21; i++) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(0 + i * step, canvassize);
    ctx.lineTo(
      canvassize,
      canvassize -
        Math.sqrt(Math.pow(linelength, 2) - Math.pow(canvassize, 2)) * i
    );
    ctx.stroke();
  }
  //downright
  for (let i = 0; i < 21; i++) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(canvassize, canvassize + canvassize - i * step);
    ctx.lineTo(
      canvassize +
        Math.sqrt(Math.pow(linelength, 2) - Math.pow(canvassize, 2)) * i,
      canvassize
    );
    ctx.stroke();
  }
}
Drawlines(400 / dividecanvas, 20 / dividecanvas);
