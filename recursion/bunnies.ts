// We have a number of bunnies and each bunny has two big floppy ears.
// Write a recursive method (no loops or multiplication) which takes the number of bunnies
// as its sole parameter and returns the total number of ears the bunnies have.
// The method should be able to handle invalid input (e.g. negative numbers)

function bunnies(n: number): number {
  if (n <= 0) {
    return 0;
  } else if (n <= 1) {
    //base case
    return 2;
  } else {
    return 2 + bunnies(n - 1);
  }
}

console.log(bunnies(100));
