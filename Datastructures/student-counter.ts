// create a function called listOfNames() that takes a list of students and returns:
// - The name of students who have more than 4 candies

// create a function called sumOfAge() that takes a list of students and returns:
// - The sum of the age of people who have less than 5 candies

const students: any[] = [
  { name: "Theodor", age: 3, candies: 2 },
  { name: "Paul", age: 9, candies: 2 },
  { name: "Mark", age: 12, candies: 5 },
  { name: "Peter", age: 7, candies: 3 },
  { name: "Olaf", age: 12, candies: 7 },
  { name: "George", age: 10, candies: 1 },
];
export function listOfNames(list: any) {
  let morethan4candies: any = [];
  morethan4candies = list.filter((list: any) => list.candies > 4);

  let x = morethan4candies.map(function (obj: any) {
    return obj.name;
    //console.log(obj.name);
  });
  //.join("\n");
  return x;
}
console.log(listOfNames(students));

//console.log(students.filter((students) => students.candies < 5));

export function sumOfAge(list: any) {
  let sumage: any = list
    .filter((list: any) => list.candies < 5)
    .map((a: any) => a.age)
    .reduce(function (a: any, b: any) {
      return a + b;
    });
  return sumage;
}
console.log(sumOfAge(students));
