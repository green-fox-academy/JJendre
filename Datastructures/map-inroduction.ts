/*let m = new Map<number, string>(); 
//console.log(m);
m.set(97, "a");
m.set(98, "b");
m.set(99, "c");
m.set(65, "A");
m.set(66, "B");
m.set(67, "C");
//console.log(m);
console.log(m.size);
if (m.size == 0) {
  console.log("map is empty");
} else {
  console.log("map size is: " + m.size);
}
console.log(m.keys());
console.log(m.values());
m.set(68, "D");
console.log(m.size);
console.log(m.get(99));*/

// with object
let introducobject: any = {};
console.log("Empty oject is created. The lenght of it is:");
console.log(Object.keys(introducobject).length);
if (Object.keys(introducobject).length === 0) {
  console.log("The object is empty.");
} else {
  console.log("object has values " + introducobject);
}
introducobject = {
  97: "a",
  98: "b",
  99: "c",
  65: "A",
  66: "B",
  67: "C",
};
introducobject[68] = "D";
console.log("All the keys are: " + Object.keys(introducobject));
console.log("Number of key-value pairs: " + Object.keys(introducobject).length);
console.log("The value of key 99 is: " + Object.values(introducobject[99]));
delete introducobject[97];
console.log("All the values are: " + Object.values(introducobject));
console.log("Key 100 exists: " + (introducobject[100] !== undefined));
introducobject = {}; //Remove all the key-value pairs
if (Object.keys(introducobject).length === 0) {
  console.log("Now the object is empty again.");
} else {
  console.log("object has values " + introducobject);
}
