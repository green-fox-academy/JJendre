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
