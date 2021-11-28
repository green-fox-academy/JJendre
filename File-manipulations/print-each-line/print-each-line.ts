// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

let fs = require('fs');
fs.readFile('my-file.txt', function (err: any, data: any) {
  if (err) console.log('Unable to read file: my-file.txt');
  const array = data.toString().split('\n');
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
});
