// Write a program that draws a
// diamond like this:
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
// The diamond should have as many lines as lineCount is
{let lineCount: number = 7; let z=Math.round((Math.round(lineCount/2)-(lineCount/2))+1.1);
for (let i: number = 1; i < lineCount+z; i++){
    let single="*";
    let space=" ";
    let ihalf=i/2;
    let ihalfr=Math.round(i/2);
    let spacemult=space.repeat(((lineCount)-i)/2);
    let multi =single.repeat(i);
    if(ihalf!=ihalfr){        
    console.log(spacemult+multi);}}
    {let lC=lineCount;
        for (let i: number =lC-z; i >0;i--){
            let single="*";
            let space=" ";
            let ihalf=i/2;
            let ihalfr=Math.round(i/2);
            let spacemult=space.repeat(((lineCount)-i)/2);
            let multi =single.repeat(i);
            if(ihalf!=ihalfr){        
            console.log(spacemult+multi);
        }}}};
        