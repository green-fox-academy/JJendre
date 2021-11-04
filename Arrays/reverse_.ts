// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

export function reverse(text: string) {
  let charArray: string[] = text.split("");
  let reverseArray: string[] = charArray.reverse();
  let reversedArray: string = reverseArray.join("");
  //console.log(reversedArray);
  return reversedArray;
}
//console.log(
console.log(
  reverse(
    `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`
  )
);
