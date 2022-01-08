/*Represent the following products with their prices:

Product	Price
Milk	1.07
Rice	1.59
Eggs	3.14
Cheese	12.60
Chicken Breasts	9.40
Apples	2.31
Tomato	2.58
Potato	1.75
Onion	1.10
Represent Bob's shopping list:

Product	Amount
Milk	3
Rice	2
Eggs	2
Cheese	1
Chicken Breasts	4
Apples	1
Tomato	2
Potato	1
Represent Alice's shopping list:

Product	Amount
Rice	1
Eggs	5
Chicken Breasts	2
Apples	1
Tomato	10
Create an application which prints out the answers to the following questions:

How much does Bob pay?
How much does Alice pay?
Who buys more Rice?
Who buys more Potato?
Who buys more different products?
Who buys more products? (more pieces)*/
let Pricelist: any = {
  Milk: "1.07",
  Rice: "1.59",
  Eggs: "3.14",
  Cheese: "12.6",
  Chicken_Breasts: "9.4",
  Apples: "2.31",
  Tomato: "2.58",
  Potato: "1.75",
  Onion: "1.1",
};
//console.log(Object.values(Pricelist["Milk"]).join(""));

let BobsList: any = {
  Milk: 3,
  Rice: "2",
  Eggs: 2,
  Cheese: 1,
  Chicken_Breasts: 4,
  Apples: 1,
  Tomato: 2,
  Potato: "1",
};
let AlicesList: any = {
  Rice: "1",
  Eggs: "5",
  Chicken_Breasts: "2",
  Apples: "1",
  Tomato: "10",
};
function Howmuchdoespay(prices: any, shoplist: any) {
  let Person: string = "";
  if (shoplist == AlicesList) Person = "Alice";
  else Person = "Bob";

  let Totalpay: any = 0;
  for (let i = 0; i < Object.keys(shoplist).length; i++) {
    let x: any = Object.values(shoplist)[i];
    let n: any = Object.values(prices[Object.keys(shoplist)[i]]).join("");
    let z = n * x;
    Totalpay = Totalpay + z;
  }
  console.log(Person + " pays " + Totalpay);
}

Howmuchdoespay(Pricelist, BobsList);
Howmuchdoespay(Pricelist, AlicesList);

function Whobuysmore(article: string) {
  if (BobsList[article] > AlicesList[article])
    console.log("Bob buys more " + article + ".");
  else if (BobsList[article] >= 0 && AlicesList[article] == undefined) {
    console.log(
      "Bob buys more " +
        article +
        ", because Alice don't buys any " +
        article +
        "."
    );
  } else if (AlicesList[article] >= 0 && BobsList[article] == undefined) {
    console.log(
      "Alice buys more " +
        article +
        ", because Bob don't buys any " +
        article +
        "."
    );
  } else if (
    BobsList[article] == undefined &&
    AlicesList[article] == undefined
  ) {
    console.log("Nobody buys " + article);
  } else if (BobsList[article] == AlicesList[article]) {
    console.log("They buy the same amount.");
  } else {
    console.log("Alice buys more " + article + ".");
  }
}
Whobuysmore("Rice");
Whobuysmore("Potato");

if (Object.keys(BobsList).length > Object.keys(AlicesList).length)
  console.log(
    "Bob buys more different products total: " + Object.keys(BobsList).length
  );
else if (Object.keys(BobsList).length == Object.keys(AlicesList).length)
  console.log(
    "They buy the same different products, total:  " +
      Object.keys(BobsList).length
  );
else {
  console.log(
    "Alice buys more different products total: " +
      Object.keys(AlicesList).length
  );
}

function Howmuchproducts(shoplist: any) {
  let Person: string = "";
  if (shoplist == AlicesList) Person = "Alice";
  else Person = "Bob";

  let Totalproduct: number = 0;
  for (let i = 0; i < Object.keys(shoplist).length; i++) {
    let x: any = Object.values(shoplist)[i];
    x = +x; // convert string to number
    Totalproduct = Totalproduct + x;
  }
  console.log(Person + " buys a total of " + Totalproduct + " pcs. products.");
}

Howmuchproducts(BobsList);
Howmuchproducts(AlicesList);

let TotalproductBob: number = 0;
for (let i = 0; i < Object.keys(BobsList).length; i++) {
  let x: any = Object.values(BobsList)[i];
  x = +x; // convert string to number
  TotalproductBob = TotalproductBob + x;
}
let TotalproductAlice: number = 0;
for (let i = 0; i < Object.keys(AlicesList).length; i++) {
  let x: any = Object.values(AlicesList)[i];
  x = +x; // convert string to number
  TotalproductAlice = TotalproductAlice + x;
}

if (TotalproductAlice > TotalproductBob)
  console.log("Therefore Alice buys more pieces products.");
else {
  console.log("Therefore Bob buys more pieces products.");
}
