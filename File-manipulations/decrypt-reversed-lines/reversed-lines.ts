// Create a method that decrypts reversed-lines.txt
var fs = require('fs');
export function reversedLines(filename: string) {
  let straightArrayfinal: any = '';
  let filedata = '';
  let straightArray: any = '';
  let array: any = [];
  try {
    filedata = fs.readFileSync(filename, 'utf-8');
  } catch {
    return 'File not found';
  }
  array = filedata.toString().split('');
  straightArray = array.reverse().join('');
  straightArray = straightArray.toString().split(/[\n\r]+/);
  straightArrayfinal = straightArray.reverse().join('\n');
  return straightArrayfinal;
}
console.log(reversedLines('reversed-lines.txt'));
fs.writeFile(
  'normalText.txt',
  reversedLines('reversed-lines.txt'),
  function (err: Error) {
    if (err) throw '';
  }
);
