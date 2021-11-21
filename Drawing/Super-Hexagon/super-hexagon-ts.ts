const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};
let cellsize: number = 10;
let cellnumber: number = 19;
let origox = 200;
let origoy = 380;

function hexagonmiddle(steps: number, cells: number) {
  for (let i = 0; i < cells; i++) {
    let ax: number = origox;
    let ay: number = origoy;
    let bx: number = origox + steps;
    let by: number = origoy;
    let cx: number = origox + steps + steps / 2;
    let cy: number =
      origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2));
    let dx: number = origox + steps;
    let dy: number =
      origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2;
    let ex: number = origox;
    let ey: number =
      origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2;
    let fx: number = origox - steps / 2;
    let fy: number =
      origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2));

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(
      ax,
      ay - i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2
    );
    ctx.lineTo(
      bx,
      by - i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2
    );
    ctx.lineTo(
      cx,
      cy - i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2
    );
    ctx.lineTo(
      dx,
      dy - i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2
    );
    ctx.lineTo(
      ex,
      ey - i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2
    );
    ctx.lineTo(
      fx,
      fy - i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2
    );
    ctx.lineTo(
      ax,
      ay - i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2
    );

    ctx.stroke();
  }
}
hexagonmiddle(cellsize, cellnumber);

function hexagonrightside(steps: number, cells: number) {
  for (let i = 0; i < cells / 2; i++) {
    for (let j = 0; j < cells / 2; j++) {
      let ax: number = origox;
      let ay: number = origoy;
      let bx: number = origox + steps;
      let by: number = origoy;
      let cx: number = origox + steps + steps / 2;
      let cy: number =
        origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2));
      let dx: number = origox + steps;
      let dy: number =
        origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2;
      let ex: number = origox;
      let ey: number =
        origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2;
      let fx: number = origox - steps / 2;
      let fy: number =
        origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2));

      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo(
        ax + i * (steps + steps / 2),
        ay -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        bx + i * (steps + steps / 2),
        by -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        cx + i * (steps + steps / 2),
        cy -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        dx + i * (steps + steps / 2),
        dy -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        ex + i * (steps + steps / 2),
        ey -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        fx + i * (steps + steps / 2),
        fy -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        ax + i * (steps + steps / 2),
        ay -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );

      ctx.stroke();
    }
  }
}
hexagonrightside(cellsize, cellnumber);

function hexagonleftside(steps: number, cells: number) {
  for (let i = 0; i < cells / 2; i++) {
    for (let j = 0; j < cells / 2; j++) {
      let ax: number = origox;
      let ay: number = origoy;
      let bx: number = origox + steps;
      let by: number = origoy;
      let cx: number = origox + steps + steps / 2;
      let cy: number =
        origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2));
      let dx: number = origox + steps;
      let dy: number =
        origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2;
      let ex: number = origox;
      let ey: number =
        origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2;
      let fx: number = origox - steps / 2;
      let fy: number =
        origoy - Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2));

      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo(
        ax - i * (steps + steps / 2),
        ay -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        bx - i * (steps + steps / 2),
        by -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        cx - i * (steps + steps / 2),
        cy -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        dx - i * (steps + steps / 2),
        dy -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        ex - i * (steps + steps / 2),
        ey -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        fx - i * (steps + steps / 2),
        fy -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        ax - i * (steps + steps / 2),
        ay -
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );

      ctx.stroke();
    }
  }
}
hexagonleftside(cellsize, cellnumber);

function hexagonrighttop(steps: number, cells: number) {
  for (let i = 0; i < cells / 2; i++) {
    for (let j = 0; j < cells / 2; j++) {
      let ax: number = origox;
      let ay: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let bx: number = origox + steps;
      let by: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let cx: number = origox + steps + steps / 2;
      let cy: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let dx: number = origox + steps;
      let dy: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2 -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let ex: number = origox;
      let ey: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2 -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let fx: number = origox - steps / 2;
      let fy: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);

      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo(
        ax + i * (steps + steps / 2),
        ay +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        bx + i * (steps + steps / 2),
        by +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        cx + i * (steps + steps / 2),
        cy +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        dx + i * (steps + steps / 2),
        dy +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        ex + i * (steps + steps / 2),
        ey +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        fx + i * (steps + steps / 2),
        fy +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        ax + i * (steps + steps / 2),
        ay +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );

      ctx.stroke();
    }
  }
}
hexagonrighttop(cellsize, cellnumber);

function hexagonlefttop(steps: number, cells: number) {
  for (let i = 0; i < cells / 2; i++) {
    for (let j = 0; j < cells / 2; j++) {
      let ax: number = origox;
      let ay: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let bx: number = origox + steps;
      let by: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let cx: number = origox + steps + steps / 2;
      let cy: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let dx: number = origox + steps;
      let dy: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2 -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let ex: number = origox;
      let ey: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) * 2 -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);
      let fx: number = origox - steps / 2;
      let fy: number =
        origoy -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) -
        Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) *
          2 *
          (cells - 1);

      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo(
        ax - i * (steps + steps / 2),
        ay +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        bx - i * (steps + steps / 2),
        by +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        cx - i * (steps + steps / 2),
        cy +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        dx - i * (steps + steps / 2),
        dy +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        ex - i * (steps + steps / 2),
        ey +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        fx - i * (steps + steps / 2),
        fy +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );
      ctx.lineTo(
        ax - i * (steps + steps / 2),
        ay +
          i * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2)) +
          j * 2 * Math.sqrt(Math.pow(steps, 2) - Math.pow(steps / 2, 2))
      );

      ctx.stroke();
    }
  }
}
hexagonlefttop(cellsize, cellnumber);
