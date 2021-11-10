// Write a function that checks if the array contains "7"
// If it does, return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

/*function containsSeven(numb:Array<number>){
if (numb.indexOf(7)>-1) return "Hoorray"; else {
    return "Noooooo"
}}*/

function containsSeven(numb: Array<number>) {
  if (numb.includes(7) == true) return "Hoorray";
  else return " Noo";
}

console.log(containsSeven(numbers));
