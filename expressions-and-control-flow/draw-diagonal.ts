// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
{let lineCount: number = 6;
    for (let i: number = 0; i < lineCount; i++){
        let single="%";
        let space=" ";
        let z:number=i-1;
        let spacemulti=space.repeat(lineCount-1);
        let multi =single.repeat(lineCount);
        let spacepfront=space.repeat(Math.abs(z));
        let spaceback=space.repeat((Math.abs(lineCount-z-3)));
        if(i==0 || i==lineCount-1) { 
        console.log(multi);
        }else {console.log(single+spacepfront+single+spaceback+single)}
        }};
