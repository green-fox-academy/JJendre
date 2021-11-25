const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};
let cellsize: number = 10;
let cellnumber: number = 20;
let origox = 160;
let origoy = 400;

function hexagon(getcellsize: number, cells: number) {
  origox = 230 - cellsize * 0.7 - cellnumber * 0.9;
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

  ctx.clearRect(0, 0, canvas.width, canvas.height);
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

  //hexagonmiddle(getcellsize, cellnumber);

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
        ax + i * (getcellsize + getcellsize / 2),
        ay - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        bx + i * (getcellsize + getcellsize / 2),
        by - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        cx + i * (getcellsize + getcellsize / 2),
        cy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        dx + i * (getcellsize + getcellsize / 2),
        dy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ex + i * (getcellsize + getcellsize / 2),
        ey - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        fx + i * (getcellsize + getcellsize / 2),
        fy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ax + i * (getcellsize + getcellsize / 2),
        ay - i * halfcellhigh - j * 2 * halfcellhigh
      );

      ctx.stroke();
    }
  }

  //hexagonrightside(getcellsize, cellnumber);

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
        ax - i * (getcellsize + getcellsize / 2),
        ay - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        bx - i * (getcellsize + getcellsize / 2),
        by - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        cx - i * (getcellsize + getcellsize / 2),
        cy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        dx - i * (getcellsize + getcellsize / 2),
        dy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ex - i * (getcellsize + getcellsize / 2),
        ey - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        fx - i * (getcellsize + getcellsize / 2),
        fy - i * halfcellhigh - j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ax - i * (getcellsize + getcellsize / 2),
        ay - i * halfcellhigh - j * 2 * halfcellhigh
      );

      ctx.stroke();
    }
  }

  //hexagonleftside(getcellsize, cellnumber);

  for (let i = 0; i < ilenght; i++) {
    for (let j = 0; j < jlenght; j++) {
      let ax: number = origox;
      let ay: number = origoy - halfcellhigh * 2 * (cells - 1);
      let bx: number = origox + getcellsize;
      let by: number = origoy - halfcellhigh * 2 * (cells - 1);
      let cx: number = origox + getcellsize + getcellsize / 2;
      let cy: number = origoy - halfcellhigh - halfcellhigh * 2 * (cells - 1);
      let dx: number = origox + getcellsize;
      let dy: number =
        origoy - halfcellhigh * 2 - halfcellhigh * 2 * (cells - 1);
      let ex: number = origox;
      let ey: number =
        origoy - halfcellhigh * 2 - halfcellhigh * 2 * (cells - 1);
      let fx: number = origox - getcellsize / 2;
      let fy: number = origoy - halfcellhigh - halfcellhigh * 2 * (cells - 1);

      ctx.strokeStyle =
        "rgb(" +
        Math.floor(260 - 20 * i) +
        ", " +
        Math.floor(260 - 20 * j) +
        ", 0)";
      ctx.beginPath();
      ctx.moveTo(
        ax + i * (getcellsize + getcellsize / 2),
        ay + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        bx + i * (getcellsize + getcellsize / 2),
        by + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        cx + i * (getcellsize + getcellsize / 2),
        cy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        dx + i * (getcellsize + getcellsize / 2),
        dy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ex + i * (getcellsize + getcellsize / 2),
        ey + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        fx + i * (getcellsize + getcellsize / 2),
        fy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ax + i * (getcellsize + getcellsize / 2),
        ay + i * halfcellhigh + j * 2 * halfcellhigh
      );

      ctx.stroke();
    }
  }

  //hexagonrighttop(getcellsize, cellnumber);

  for (let i = 0; i < ilenght; i++) {
    for (let j = 0; j < jlenght; j++) {
      let ax: number = origox;
      let ay: number = origoy - halfcellhigh * 2 * (cells - 1);
      let bx: number = origox + getcellsize;
      let by: number = origoy - halfcellhigh * 2 * (cells - 1);
      let cx: number = origox + getcellsize + getcellsize / 2;
      let cy: number = origoy - halfcellhigh - halfcellhigh * 2 * (cells - 1);
      let dx: number = origox + getcellsize;
      let dy: number =
        origoy - halfcellhigh * 2 - halfcellhigh * 2 * (cells - 1);
      let ex: number = origox;
      let ey: number =
        origoy - halfcellhigh * 2 - halfcellhigh * 2 * (cells - 1);
      let fx: number = origox - getcellsize / 2;
      let fy: number = origoy - halfcellhigh - halfcellhigh * 2 * (cells - 1);

      ctx.strokeStyle =
        "rgb(" +
        Math.floor(240 - 20 * i) +
        ", " +
        Math.floor(260 - 20 * j) +
        ", 50)";
      ctx.beginPath();
      ctx.moveTo(
        ax - i * (getcellsize + getcellsize / 2),
        ay + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        bx - i * (getcellsize + getcellsize / 2),
        by + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        cx - i * (getcellsize + getcellsize / 2),
        cy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        dx - i * (getcellsize + getcellsize / 2),
        dy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ex - i * (getcellsize + getcellsize / 2),
        ey + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        fx - i * (getcellsize + getcellsize / 2),
        fy + i * halfcellhigh + j * 2 * halfcellhigh
      );
      ctx.lineTo(
        ax - i * (getcellsize + getcellsize / 2),
        ay + i * halfcellhigh + j * 2 * halfcellhigh
      );

      ctx.stroke();
    }
  }
}
hexagon(cellsize, cellnumber);

var scale = document.getElementById("myRange") as HTMLInputElement;
scale.oninput = function () {
  cellsize = parseInt(scale.value);

  hexagon(cellsize, cellnumber);
};

var size = document.getElementById("myRange2") as HTMLInputElement;
size.oninput = function () {
  cellnumber = parseInt(size.value);

  hexagon(cellsize, cellnumber);
};

//getcellsize = (<HTMLInputElement>document.getElementById("rangeInput")).value;
