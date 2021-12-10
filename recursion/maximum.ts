//Write a function which returns the largest element of an array using recursion.

function maximumFinder(array: Array<number>): number {
  let copyOfarrray = array.slice();
  if (copyOfarrray.length === 1) {
    return copyOfarrray[0];
  }
  if (copyOfarrray[0] < copyOfarrray[1]) {
    copyOfarrray.splice(0, 1);
  } else {
    copyOfarrray.splice(1, 1);
  }
  console.log(copyOfarrray);
  return maximumFinder(copyOfarrray);
}
console.log(maximumFinder([3, 5, 88, 7, 10, 99]));
