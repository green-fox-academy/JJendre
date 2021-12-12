// Create a function called maxSum which expects an array of five integers as an
// input parameter and returns the maximum values that can be calculated by summing exactly four of the five integers.

function maxSum(array: Array<number>) {
  let copyOfarrray: number[] = [];
  function minFinder(array: Array<number>): number {
    copyOfarrray = array.slice();
    if (copyOfarrray.length === 1) {
      return copyOfarrray[0];
    }
    if (copyOfarrray[0] > copyOfarrray[1]) {
      copyOfarrray.splice(0, 1);
    } else {
      copyOfarrray.splice(1, 1);
    }
    return minFinder(copyOfarrray);
  }
  array.forEach((element: number, index: number) => {
    if (element === minFinder(array)) array.splice(index, 1);
  });
  console.log(array);
  let maxSum = array.reduce(function (a: number, b: number) {
    return a + b;
  });
  return maxSum;
}

console.log(maxSum([3, 4, 6, 10, 5]));
