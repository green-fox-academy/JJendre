const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(150, 200);
ctx.stroke();
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(300, 200);
ctx.stroke();
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(150, 200);
ctx.lineTo(300, 200);
ctx.stroke();
ctx.strokeStyle = "grey";
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(300, 50);
ctx.stroke();
// adding two purple diagonal :)
ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 200);
ctx.lineTo(300, 50);
ctx.stroke();
