// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Expected output: ["Eve-Joe", "Ashley-Fred"...]
let girls: string[] = ["Eve", "Ashley", "Claire", "Kat", "Jane"];
let boys: string[] = ["Joe", "Fred", "Tom", "Todd", "Neef", "Jeff"];

function match(array1: Array<string>, array2: Array<string>) {
  let together: string[] = [];
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] == undefined)
      together.push("And the luckiest " + boys[i] + " :)");
    else together.push(array1[i] + "-" + boys[i]);
  }
  return together;
}

console.log(match(girls, boys));
