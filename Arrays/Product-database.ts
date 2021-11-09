/*We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

Create a map with the following key-value pairs:

Product name (key)	Price (value)
Eggs	200
Milk	200
Fish	400
Apples	150
Bread	50
Chicken	550
Create an application which prints out the answers to the following questions:

How much is the fish?
What is the most expensive product?
What is the average price?
How many products' price is below 300?
Is there anything we can buy for exactly 125?
What is the cheapest product?
*/
let Productdatabase: any = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

//How much is the fish
function Howmuchis(Item: any) {
  console.log("The " + Item + " costs " + Productdatabase[Item] + ".");
}
Howmuchis("Fish");

//Most expensive
let ValueArray: number[] = [];
for (let i = 0; i < Object.keys(Productdatabase).length; i++) {
  let x: any = Object.values(Productdatabase)[i];
  x = +x; // convert string to number
  ValueArray.push(x);
}
ValueArray.sort((a, b) => a - b);
let Mostexpensive: number = 0;
Mostexpensive = ValueArray[Object.keys(Productdatabase).length - 1];
for (let i = 0; i < Object.keys(Productdatabase).length; i++) {
  if (Object.values(Productdatabase)[i] == Mostexpensive)
    console.log(
      "The most expensive product is " +
        Object.keys(Productdatabase)[i] +
        " it costs " +
        Mostexpensive
    );
}
//Average
let sum = ValueArray.reduce(function (a, b) {
  return a + b;
});
let Average = sum / Object.keys(Productdatabase).length;
console.log("The average price is: " + Average);

//Product below 300
let Below300Array: number[] = [];
for (let i = 0; i < ValueArray.length; i++) {
  if (ValueArray[i] < 300) Below300Array.push(ValueArray[i]);
}
console.log("Below 300 are " + Below300Array.length + " products.");

// Is there anything we can buy for exactly 125?let Below300Array: number[] = [];
let Array125: number[] = [];
for (let i = 0; i < ValueArray.length; i++) {
  if (ValueArray[i] === 125) Array125.push(ValueArray[i]);
}
if (Array125.length !== 0) console.log("For exactly 125 we can buy");
else {
  console.log("There is nothing for exactly 125.");
}
// Cheapest
let cheapest: number = 0;
cheapest = ValueArray[0];
for (let i = 0; i < Object.keys(Productdatabase).length; i++) {
  if (Object.values(Productdatabase)[i] == cheapest)
    console.log(
      "The cheapest product is " +
        Object.keys(Productdatabase)[i] +
        " it costs " +
        cheapest
    );
}
