const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let array: number[][] = [
  [10, 10],
  [290, 10],
  [290, 290],
  [10, 290],
];
function connectpointshardcoded(array: Array<any>) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(array[0][0], array[0][1]);
  ctx.lineTo(array[1][0], array[1][1]);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(array[1][0], array[1][1]);
  ctx.lineTo(array[2][0], array[2][1]);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(array[2][0], array[2][1]);
  ctx.lineTo(array[3][0], array[3][1]);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(array[3][0], array[2][1]);
  ctx.lineTo(array[0][0], array[0][1]);
  ctx.stroke();
}
connectpointshardcoded([
  [10, 10],
  [290, 10],
  [290, 290],
  [10, 290],
]);

let Connectthese: any[][] = [
  [50, 100],
  [70, 70],
  [80, 90],
  [90, 90],
  [100, 70],
  [120, 100],
  [85, 130],
  [50, 100],
];
function loopconnectpoint(array: Array<any>) {
  for (let i = 0; i < Connectthese.length; i++) {
    for (let j = 0; j < Connectthese[i].length; j++) {
      console.log(array[i][j]);
      ctx.strokeStyle = "darkgreen";
      ctx.beginPath();
      ctx.moveTo(array[i][j], array[i][j + 1]);
      ctx.lineTo(array[i + 1][j], array[i + 1][j + 1]);
      ctx.stroke();
    }
  }
}
loopconnectpoint(Connectthese);
