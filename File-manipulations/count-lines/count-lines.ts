// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

// import { error } from 'console';
// import { readFileSync } from 'fs';
var fs = require('fs');
export function countLines(filename: string) {
  let array: any = [];
  try {
    let filedata = fs.readFileSync(filename, 'utf-8');
    array = filedata.toString().split('\n');
    return array.length;
  } catch {
    return 0;
  }
}
console.log(countLines('my-file.txt'));
