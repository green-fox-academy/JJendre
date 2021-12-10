// The fibonacci sequence is a famous bit of mathematics, and it happens to have
// a recursive definition. The first two values in the sequence are 0 and 1
// (essentially 2 base cases). Each subsequent value is the sum of the previous
// two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on.
// Define a recursive fibonacci(n) method that returns the nth fibonacci number,
// with n=0 representing the start of the sequence.
// The method must be able to handle invalid input (e.g. negative numbers)

let narray: any = [];
function fibonacci(n: number): number {
  if (n <= 0) {
    return 0;
  } else if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(5));

function fibonacciArray(n: number): Array<number> {
  if (n < 2) {
    return [1];
  }
  if (n < 3) {
    return [1, 1];
  }
  let a: number[] = fibonacciArray(n - 1);
  a.push(a[n - 2] + a[n - 3]);
  return a;
}

console.log(fibonacciArray(5));
