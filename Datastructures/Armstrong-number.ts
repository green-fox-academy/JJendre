//Write a simple program to check if a given number is an armstrong number.
//The program should ask for a number.
//E.g. if we type 371, the program should print out: "The 371 is an Armstrong number".

//function Armstrongnumber(x: any) {
//let numbertoArray: any[] = [];
function Armstrongnumber(x: any) {
  let numbertoArray: any = ("" + x).split("");
  let sumofdigitpower = 0;
  for (let i = 0; i < numbertoArray.length; i++) {
    sumofdigitpower =
      sumofdigitpower + Math.pow(numbertoArray[i], numbertoArray.length);
  }
  if (sumofdigitpower == x) {
    console.log("The " + sumofdigitpower + " is an Armstrong number");
  } else {
    console.log("Sorry, the " + x + " isn't an Armstrong number");
  }
}
Armstrongnumber(1634);
