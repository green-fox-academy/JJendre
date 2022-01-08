// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter
//let n: number = 10;
export function sum(n: number) {
  let list: number[] = [];
  for (let j = 0; j <= n; j++) {
    list.push(j);
  }
  let sum = list.reduce(function (a, b) {
    return a + b;
  });
  //console.log(sum);
  return sum;
}
//sum(n);
