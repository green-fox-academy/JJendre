const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

const dividecanvas: number = 4;
for (let k = 0; k < dividecanvas; k++) {
  for (let j = 0; j < dividecanvas; j++) {
    function Drawlines(canvassize: number, step: number): void {
      let linelength: number = Math.sqrt(
        Math.pow(canvassize, 2) + Math.pow(step, 2)
      );
      //purplelines
      for (let i = 0; i < 21; i++) {
        ctx.strokeStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(
          canvassize + canvassize * k,
          canvassize - i * step + canvassize * j
        );
        ctx.lineTo(
          canvassize -
            Math.sqrt(Math.pow(linelength, 2) - Math.pow(canvassize, 2)) * i +
            k * canvassize,
          0 + j * canvassize
        );
        ctx.stroke();
      }
      //greenlines
      for (let i = 0; i < 21; i++) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(
          canvassize - i * step + canvassize * k,
          canvassize + canvassize * j
        );
        ctx.lineTo(
          0 + k * canvassize,
          canvassize -
            Math.sqrt(Math.pow(linelength, 2) - Math.pow(canvassize, 2)) * i +
            canvassize * j
        );
        ctx.stroke();
      }
    }
    Drawlines(400 / dividecanvas, 20 / dividecanvas);
  }
}
