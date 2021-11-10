// Check if "listOfNumbers" contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// It should return "true" if it contains all elements, otherwise returns "false"

let elements: number[] = [4, 8, 12, 16];
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

/*function checkNums (bazis:any,items:any){let checker=(bazis:any, items:any) => items.every(i => bazis.includes(i));
return (checker(bazis,items))}

console.log(checkNums(listOfNumbers,elements))*/

function isTrue(items: Array<number>, basis: Array<number>) {
  return items.every((i) => basis.includes(i));
}

console.log(isTrue(elements, listOfNumbers));
