//Given base and n that are both 1 or more, write a recursive method
//(no loops) which returns the value of base to the n-th power,
//so powerN(3, 2) is 9 (3 squared).

function powerNMath(N: number, n: number): number {
  return Math.pow(N, n);
}
console.log(powerNMath(3, 2));

function powerNrecursive(N: number, n: number): number {
  if (n < 1) {
    //base case
    return 1;
  } else {
    return N * powerNrecursive(N, n - 1);
  }
}
console.log(powerNrecursive(3, 3));
