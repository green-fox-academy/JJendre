// Given a string, write a recursive (no loops) method which
// returns a new string with all the lowercase 'x' chars removed.

let removeThex: string = 'expressionwithx';

while (removeThex.includes('x')) {
  removeThex = removeThex.replace('x', '');
}
console.log(removeThex);
