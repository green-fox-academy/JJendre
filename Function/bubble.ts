//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]function sort (x:boolean,a:any,...b:any){
function sort(x: boolean, a: any, ...b: any) {
  let numbers = [a, ...b];
  if (x == true) {
    numbers.sort((b, a) => a - b);
    console.log(numbers);
  } else {
    numbers.sort((a, b) => a - b);
    console.log(numbers);
  }
}
sort(false, 4, 101, 5, 22, 45, 2, 1, 52, 10, 7, 5);
