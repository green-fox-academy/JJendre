//Write a recursive method which returns the greatest common divisor (GCD) of two numbers.
//The method should be able to handle negative numbers!

function gcd(x: number, y: number): number {
  if (y === 0) {
    return x;
  } else {
    return gcd(y, x % y);
  }
}

console.log(gcd(100, -10));
