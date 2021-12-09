// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

let fs = require('fs');
let dataOfFile: string = '';
try {
  dataOfFile = fs.readFileSync('my-file.txt', 'utf-8');
} catch (e) {
  console.log('Unable to read file: my-file.txt');
}
const textarray: string[] = dataOfFile.toString().split('\n');
for (let i = 0; i < textarray.length; i++) {
  console.log(textarray[i]);
}
