// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
{let lineCount: number = 6;
for (let i: number = 1; i <= lineCount; i++){
    let single="%";
    let space=" ";
    let spacemulti=space.repeat(lineCount-2);
    let multi =single.repeat(lineCount);
    if(i==1 || i==lineCount) { 
    console.log(multi);
    }else {console.log(single+spacemulti+single)}
    }};