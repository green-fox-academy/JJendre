let shopItems: any[] = ["Cupcake", 2, "Brownie", false];

// Accidentally we added "2" and "false" to the array
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called repairSweets() which takes the list as a parameter
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let original: any[] = ["Cupcake", "Croissant", "Brownie", "Ice cream"];
//console.log(shopItems);

function repairSweets(list: any) {
  list.splice(0, list.length, ...original);
  return list;
}

console.log(repairSweets(shopItems));

/*shopItems.length = 0; // Clear the array
shopItems.push(...original); // Push the second array using the spread opperator
console.log(shopItems)*/
