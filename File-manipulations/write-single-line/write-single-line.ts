// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

var fs = require('fs');

function writename(name: any) {
  const data = fs.readFileSync('my-file.txt').toString().split('\n');
  data.splice(0, 0, name);
  var text = data.join('\n');

  fs.writeFile('my-file.txt', text, function (err: Error) {
    if (err) return console.log('Unable to write file: my-file.txt');
  });
}
writename('Endre JAKAB');
