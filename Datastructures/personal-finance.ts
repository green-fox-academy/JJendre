/*Create a list with the following items:
500, 1000, 1250, 175, 800 and 120
Create an application which prints out the answers to the following questions:
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings?*/
let MyList: number[] = [500, 1000, 1250, 175, 800, 120];

function Howmuchdidwespend(n: Array<number>) {
  let sum = n.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
}

function Whichwasourgreatestexpense(n: Array<number>) {
  n.sort((a, b) => a - b);
  let biggest: number = n[n.length - 1];
  console.log(biggest);
}

function Whichwasourcheapestspending(n: Array<number>) {
  n.sort((a, b) => a - b);
  let cheapest: number = n[0];
  console.log(cheapest);
}

function Whatwastheaverageamountofourspendings(n: Array<number>) {
  let sum = n.reduce(function (a, b) {
    return a + b;
  });
  let average: number = sum / n.length;
  console.log(average);
}

Howmuchdidwespend(MyList);
Whichwasourgreatestexpense(MyList);
Whichwasourcheapestspending(MyList);
Whatwastheaverageamountofourspendings(MyList);
