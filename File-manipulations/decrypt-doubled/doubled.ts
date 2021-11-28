// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

var fs = require('fs');
let uniqueArray: any = '';
export function decryptDoubled(filename: string) {
  let array: any = [];
  try {
    let filedata = fs.readFileSync(filename, 'utf-8');
    array = filedata.toString().split(' ');
    for (let i = 0; i < filedata.length; i++) {
      if (filedata[i] != filedata[i - 1]) {
        uniqueArray = uniqueArray.concat(filedata[i]);
      }
    }
    return uniqueArray;
  } catch {
    return 'File not found';
  }
}
console.log(decryptDoubled('duplicated-chars.txt'));
fs.writeFile('output.txt', uniqueArray, function (err: Error) {
  if (err) throw '';
});
