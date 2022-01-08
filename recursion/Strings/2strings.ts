// Given a string, write a recursive (no loops) method which returns
// a new string with all the lowercase 'x' chars changed to 'y' chars.

var fs = require('fs');
let uniqueArray: any = '';

function changeCharacter_x_Tocharacter_y(filename: string) {
  let arraywithx: any = [];
  let filedata = fs.readFileSync(filename, 'utf-8');
  console.log(filedata);
  arraywithx = filedata.toString().split(' ');

  //console.log(arraywithx);
  return uniqueArray;
}
console.log(changeCharacter_x_Tocharacter_y('textX.txt'));
fs.writeFile('Ytext.txt', uniqueArray, function (err: Error) {
  if (err) throw '';
});
