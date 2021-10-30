// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`
{
  let numbers: number[] = [3, 4, 5, 6, 7];
  /*let reversnumbers = numbers.reverse();
  console.log(reversnumbers);*/
  /*let temp = numbers;
  temp.forEach((_, i, a) => console.log(a[a.length - i - 1]));*/
  let arr1 = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    arr1.push(numbers[i]);
  }
  console.log(arr1);
}
