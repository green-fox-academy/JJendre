// Create a method that decrypts reversed-order.txt
var fs = require('fs');
let straightArray: any = '';
let straightArrayfinal: any = '';

export function reversedOrder(filename: string) {
  let array: any = [];
  try {
    let filedata = fs.readFileSync(filename, 'utf-8');
    array = filedata.toString();
    straightArray = array.toString().split('\n');
    straightArrayfinal = straightArray.reverse().join('\n');

    return straightArrayfinal;
  } catch {
    return 'File not found';
  }
}
console.log(reversedOrder('reversed-order.txt'));
fs.writeFile('finalText.txt', straightArrayfinal, function (err: Error) {
  if (err) throw '';
});
