// Write a program that prints the numbers from 1 to 100
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

//export function fizzBuzz() {
    // write your code here for Gradescope testing  }
for (let i: number = 0; i < 101; i++) {
  let i3=(i/3);
  let ir3=Math.round(i3);
  let i5=(i/5);
  let ir5=Math.round(i/5);
   if (i3==ir3&&i5==ir5) {
   console.log('FizzBuzz');
   }
   else if(i5==ir5){console.log('Buzz');
   }
   else if(i3==ir3){console.log('Fizz')
   }
   else {console.log(i);
}};
