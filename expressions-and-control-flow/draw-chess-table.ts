// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
{let lineCount: number = 8;
    for (let i: number = 1; i <= lineCount; i++){
        let single="% ";
        let space=" %";
        let spacemulti=space.repeat(lineCount/2);
        let multi =single.repeat(lineCount/2);
        if(i%2==0) { 
        console.log(spacemulti);
        }else {console.log(multi)}
        }};
