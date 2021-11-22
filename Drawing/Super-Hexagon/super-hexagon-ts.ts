const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};
let cellsize: number = 19;
let cellnumber: number = 10;
let origox = 200;
let origoy = 380;
let halfcellhigh: number = Math.sqrt(
  Math.pow(cellsize, 2) - Math.pow(cellsize / 2, 2)
);
let ilenght: number = Math.round(cellnumber / 2);
if (cellnumber % 2 === 0) {
  ilenght = ilenght + 1;
}
let jlenght: number = Math.round(cellnumber / 2);

let ax: number = origox;
let ay: number = origoy;
let bx: number = origox + cellsize;
let by: number = origoy;
let cx: number = origox + cellsize + cellsize / 2;
let cy: number = origoy - halfcellhigh;
let dx: number = origox + cellsize;
let dy: number = origoy - halfcellhigh * 2;
let ex: number = origox;
let ey: number = origoy - halfcellhigh * 2;
let fx: number = origox - cellsize / 2;
let fy: number = origoy - halfcellhigh;

function hexagonmiddle(cellsize: number, cells: number) {
  for (let i = 0; i < cells; i++) {
    ctx.strokeStyle =
      "rgb(" +
      Math.floor(260 - 20 * i) +
      ", " +
      Math.floor(260 - 20 * i) +
      ", 0)";
    ctx.beginPath();
    ctx.moveTo(ax, ay - i * halfcellhigh * 2);
    ctx.lineTo(bx, by - i * halfcellhigh * 2);
    ctx.lineTo(cx, cy - i * halfcellhigh * 2);
    ctx.lineTo(dx, dy - i * halfcellhigh * 2);
    ctx.lineTo(ex, ey - i * halfcellhigh * 2);
    ctx.lineTo(fx, fy - i * halfcellhigh * 2);
    ctx.lineTo(ax, ay - i * halfcellhigh * 2);

    ctx.stroke();
  }
}
hexagonmiddle(cellsize, cellnumber);

function hexagonrightside(cellsize: number, cells: number) {
  for (let i = 0; i < ilenght; i++) {
    for (let j = 0; j < jlenght; j++) {
      ctx.strokeStyle =
        "rgb(" +
        Math.floor(260 - 20 * i) +
        ", " +
        Math.floor(260 - 20 * j) +
        ", 0)";
      ctx.beginPath();
      ctx.moveTo(
        ax + i * (cellsize + cellsize / 2),
        ay - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        bx + i * (cellsize + cellsize / 2),
        by - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        cx + i * (cellsize + cellsize / 2),
        cy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        dx + i * (cellsize + cellsize / 2),
        dy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ex + i * (cellsize + cellsize / 2),
        ey - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        fx + i * (cellsize + cellsize / 2),
        fy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ax + i * (cellsize + cellsize / 2),
        ay - i * halfcellhigh - j * 2 * halfcellhigh
      );

      ctx.stroke();
    }
  }
}
hexagonrightside(cellsize, cellnumber);

function hexagonleftside(cellsize: number, cells: number) {
  for (let i = 0; i < ilenght; i++) {
    for (let j = 0; j < jlenght; j++) {
      ctx.strokeStyle =
        "rgb(" +
        Math.floor(260 - 20 * i) +
        ", " +
        Math.floor(260 - 20 * j) +
        ", 0)";
      ctx.beginPath();
      ctx.moveTo(
        ax - i * (cellsize + cellsize / 2),
        ay - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        bx - i * (cellsize + cellsize / 2),
        by - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        cx - i * (cellsize + cellsize / 2),
        cy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        dx - i * (cellsize + cellsize / 2),
        dy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ex - i * (cellsize + cellsize / 2),
        ey - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        fx - i * (cellsize + cellsize / 2),
        fy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ax - i * (cellsize + cellsize / 2),
        ay - i * halfcellhigh - j * 2 * halfcellhigh
      );

      ctx.stroke();
    }
  }
}
hexagonleftside(cellsize, cellnumber);

function hexagonrighttop(cellsize: number, cells: number) {
  for (let i = 0; i < ilenght; i++) {
    for (let j = 0; j < jlenght; j++) {
      let ax: number = origox;
      let ay: number = origoy - halfcellhigh * 2 * (cells - 1);
      let bx: number = origox + cellsize;
      let by: number = origoy - halfcellhigh * 2 * (cells - 1);
      let cx: number = origox + cellsize + cellsize / 2;
      let cy: number = origoy - halfcellhigh - halfcellhigh * 2 * (cells - 1);
      let dx: number = origox + cellsize;
      let dy: number =
        origoy - halfcellhigh * 2 - halfcellhigh * 2 * (cells - 1);
      let ex: number = origox;
      let ey: number =
        origoy - halfcellhigh * 2 - halfcellhigh * 2 * (cells - 1);
      let fx: number = origox - cellsize / 2;
      let fy: number = origoy - halfcellhigh - halfcellhigh * 2 * (cells - 1);

      ctx.strokeStyle =
        "rgb(" +
        Math.floor(260 - 20 * i) +
        ", " +
        Math.floor(260 - 20 * j) +
        ", 0)";
      ctx.beginPath();
      ctx.moveTo(
        ax + i * (cellsize + cellsize / 2),
        ay + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        bx + i * (cellsize + cellsize / 2),
        by + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        cx + i * (cellsize + cellsize / 2),
        cy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        dx + i * (cellsize + cellsize / 2),
        dy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ex + i * (cellsize + cellsize / 2),
        ey + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        fx + i * (cellsize + cellsize / 2),
        fy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ax + i * (cellsize + cellsize / 2),
        ay + i * halfcellhigh + j * 2 * halfcellhigh
      );

      ctx.stroke();
    }
  }
}
hexagonrighttop(cellsize, cellnumber);

function hexagonlefttop(cellsize: number, cells: number) {
  for (let i = 0; i < ilenght; i++) {
    for (let j = 0; j < jlenght; j++) {
      let ax: number = origox;
      let ay: number = origoy - halfcellhigh * 2 * (cells - 1);
      let bx: number = origox + cellsize;
      let by: number = origoy - halfcellhigh * 2 * (cells - 1);
      let cx: number = origox + cellsize + cellsize / 2;
      let cy: number = origoy - halfcellhigh - halfcellhigh * 2 * (cells - 1);
      let dx: number = origox + cellsize;
      let dy: number =
        origoy - halfcellhigh * 2 - halfcellhigh * 2 * (cells - 1);
      let ex: number = origox;
      let ey: number =
        origoy - halfcellhigh * 2 - halfcellhigh * 2 * (cells - 1);
      let fx: number = origox - cellsize / 2;
      let fy: number = origoy - halfcellhigh - halfcellhigh * 2 * (cells - 1);

      ctx.strokeStyle =
        "rgb(" +
        Math.floor(260 - 20 * i) +
        ", " +
        Math.floor(260 - 20 * j) +
        ", 0)";
      ctx.beginPath();
      ctx.moveTo(
        ax - i * (cellsize + cellsize / 2),
        ay + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        bx - i * (cellsize + cellsize / 2),
        by + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        cx - i * (cellsize + cellsize / 2),
        cy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        dx - i * (cellsize + cellsize / 2),
        dy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ex - i * (cellsize + cellsize / 2),
        ey + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        fx - i * (cellsize + cellsize / 2),
        fy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ax - i * (cellsize + cellsize / 2),
        ay + i * halfcellhigh + j * 2 * halfcellhigh
      );

      ctx.stroke();
    }
  }
}
hexagonlefttop(cellsize, cellnumber);
