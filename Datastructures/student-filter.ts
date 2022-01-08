const students: any[] = [
  { name: "Mark", age: 9.5, candies: 2 },
  { name: "Paul", age: 12, candies: 5 },
  { name: "Clark", age: 7, candies: 3 },
  { name: "Pierce", age: 12, candies: 7 },
  { name: "Sean", age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function listOfNames(list: any) {
  let morethan4candies: any = [];
  morethan4candies = list
    .filter((list: any) => list.candies > 4)
    .map(function (obj: any) {
      return obj.name;
    })
    .join("\n");
  return morethan4candies;
}

console.log(listOfNames(students));

// create a function that takes a list of students and logs:
//  - how many candies they have on average

function average(list: any) {
  let sumcandies: any = list
    //.filter((list: any) => list.candies > 0)
    .map((a: any) => a.candies)
    .reduce(function (a: any, b: any) {
      return a + b;
    });
  return sumcandies / list.length; //amount of candies devided by how many to get average
}
console.log(average(students));
