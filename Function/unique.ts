//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)
//console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]))
//  Example
//  should print: `[1, 11, 34, 52, 61]`

export function findUniqueItems(arr: Array<number>) {
  let uniqu = arr.filter((v, i, a) => a.indexOf(v) === i);

  //console.log(uniqu);
  return uniqu;
}
//console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]));
