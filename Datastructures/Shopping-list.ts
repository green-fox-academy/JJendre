/*We are going to represent a shopping list in a list containing strings.

Create a list with the following items:
ˇ"eggs", "milk", "fish", "apples", "bread" and "chicken"
Create an application which prints out the answers to the following questions:
Do we have milk on the list?
Do we have bananas on the list?*/
let shoppinglist: string[] = [
  "eggs",
  "milk",
  "fish",
  "apples",
  "bread",
  "chicken",
];
function Dowehaveonthelist(v: string, a: Array<string>) {
  if (shoppinglist.indexOf(v) > -1)
    console.log(
      "Yes, we have " +
        v +
        " on the list at position: " +
        (shoppinglist.indexOf(v) + 1)
    );
  else {
    console.log("No, We don't have any " + v + " on the list");
  }
}

Dowehaveonthelist("milk", shoppinglist);
Dowehaveonthelist("banana", shoppinglist);
