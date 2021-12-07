//Given a non-negative integer n, return the sum of its digits recursively (without loops).

function sumDigit(n: number): void {
  let x = 0;
  let numberToString: string = n.toString();
  let stringArray: string[] = numberToString.split('');
  let numberArray: number[] = [];
  numberArray = stringArray.map(Number);

  function findSum(A: Array<number>, N: number): number {
    if (N <= 0) return 0;
    return findSum(A, N - 1) + A[N - 1];
  }
  console.log(
    'The sum of digits is:  ' + findSum(numberArray, numberArray.length)
  );
}

sumDigit(55555);
