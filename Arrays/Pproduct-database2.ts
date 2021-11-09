/*We are going to represent our products in a map where 
the keys are strings representing the product's name
and the values are numbers representing the product's price.

Create a map with the following key-value pairs:

Product name (key)	Price (value)
Eggs	200
Milk	200
Fish	400
Apples	150
Bread	50
Chicken	550
Create an application which prints out the answers to the following questions:

Which products cost less than 201? (just the name)
Which products cost more than 150? (name + price)*/
let Database2: any = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};
//Which products cost less than 201? (just the name)
let ValueList: number[] = [];
for (let i = 0; i < Object.keys(Database2).length; i++) {
  let x: any = Object.values(Database2)[i];
  x = +x; // convert string to number
  ValueList.push(x);
}
let Lessthan201Array: number[] = [];
for (let i = 0; i < ValueList.length; i++) {
  if (ValueList[i] < 201) Lessthan201Array.push(ValueList[i]);
}
let Nameless201: string[] = [];
for (let i = 0; i < Object.keys(Database2).length; i++)
  for (let j = 0; j < Lessthan201Array.length; j++) {
    if (Object.values(Database2)[i] == Lessthan201Array[j])
      Nameless201 = Nameless201.concat(Object.keys(Database2)[i]);
  }
let FilteredNameless201: string[] = [];
for (let i = 0; i < Nameless201.length; i++)
  if (Nameless201[i] !== Nameless201[i + 1])
    FilteredNameless201.push(" " + Nameless201[i]); //Space added

console.log("These products cost less than 201: " + FilteredNameless201);

//Which products cost more than 150? (name + price)

let Morethan150Array: number[] = [];
for (let i = 0; i < ValueList.length; i++) {
  if (ValueList[i] > 150) Morethan150Array.push(ValueList[i]);
}
let NameMorethan150: any[] = [];
for (let i = 0; i < Object.keys(Database2).length; i++)
  for (let j = 0; j < Morethan150Array.length; j++) {
    if (Object.values(Database2)[i] == Morethan150Array[j])
      NameMorethan150 = NameMorethan150.concat(Object.keys(Database2)[i]);
  }
let FilteredNameMorethan150: number[] = [];
for (let i = 0; i < NameMorethan150.length; i++)
  if (NameMorethan150[i] !== NameMorethan150[i + 1])
    FilteredNameMorethan150.push(NameMorethan150[i]);

//console.log(Morethan150Array);
//console.log("These products cost more than 150: " + FilteredNameMorethan150 );
console.log("The following product cost more than 150 (name: price): ");
for (let i = 0; i < FilteredNameMorethan150.length; i++)
  console.log(
    FilteredNameMorethan150[i] + ": " + Database2[FilteredNameMorethan150[i]]
  );
