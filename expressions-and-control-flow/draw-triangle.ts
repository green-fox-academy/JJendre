// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
for (let lineCount: number = 0; lineCount <= 4; lineCount++){
let single="*";
let multi =single.repeat(lineCount);
console.log(multi);
}