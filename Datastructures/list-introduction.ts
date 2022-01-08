/*Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add "William" to the list
Print out whether the list is empty or not
Add "John" to the list
Add "Amanda" to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name
William
John
Amanda
Iterate through the list and print
1. William
2. John
3. Amanda
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements*/

let Names: string[] = new Array();
let Names2: string[] = [];
console.log(Names2);
console.log(Names.length);
console.log(Names2.length);
Names.push("Wiliam");
if (Names.length === 0) {
  console.log("Names are empty.");
} else console.log("Names are: " + Names);
Names.push("Amanda", "John");
console.log(Names);
console.log(Names.length);
console.log(Names[2]);
for (let i = 0; i < Names.length; i++) {
  console.log(i + 1 + ". " + Names[i]);
}
Names.splice(1, 1);
//Names = Names.slice(1, 1);
console.log(Names);
for (let i = Names.length - 1; i >= 0; i--) {
  console.log(Names[i]);
}
Names.splice(0, 2);
console.log(Names);
