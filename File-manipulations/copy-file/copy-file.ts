// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

var fs = require('fs');
function copyfiles(fileone: string, filetwo: string) {
  try {
    const data = fs.readFileSync(fileone).toString().split('\n');
    let text = data.join('\n');
    fs.writeFileSync(filetwo, text);
    return true;
  } catch {
    return false;
  }
}
console.log(copyfiles('sourcefile.txt', 'copiedfile.txt'));
