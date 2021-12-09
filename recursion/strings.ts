// Given a string, write a recursive (no loops) method which returns
// a new string with all the lowercase 'x' chars changed to 'y' chars.

let xString: string = 'eypressionwithy';

while (xString.includes('y')) {
  xString = xString.replace('y', 'x');
}
console.log(xString);
