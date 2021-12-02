// Create a method that decrypts reversed-lines.txt
var fs = require('fs');
let straightArray: any = '';
let straightArrayfinal: any = '';
export function reversedLines(filename: string) {
  let array: any = [];
  try {
    let filedata = fs.readFileSync(filename, 'utf-8');
    array = filedata.toString().split('');
    straightArray = array.reverse().join('');
    straightArray = straightArray.toString().split(/[\n\r]+/);
    straightArrayfinal = straightArray.reverse().join('\n');
    return straightArrayfinal;
  } catch {
    return 'File not found';
  }
}
console.log(reversedLines('reversed-lines.txt'));
fs.writeFile('normalText.txt', straightArrayfinal, function (err: Error) {
  if (err) throw '';
});
