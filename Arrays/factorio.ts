// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input
function calculateFactorial(num: number): number {
  if (num == 0) return 1;
  else return num * calculateFactorial(num - 1);
}

console.log(calculateFactorial(8));
