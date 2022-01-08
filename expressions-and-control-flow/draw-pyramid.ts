let lineCount: number = 4;
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
export function drawPyramid(lineCount: number) {
for (let i: number = 0; i < lineCount*2; i++){
    let single="*";
    let space=" ";
    let ihalf=i/2;
    let ihalfr=Math.round(i/2);
    let spacemult=space.repeat(((lineCount*2)-i)/2);
    let multi =single.repeat(i);
    if(ihalf!=ihalfr){        
    console.log(spacemult+multi);
    }}};