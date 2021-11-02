// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input
function calculateFactorial(num: number): number {
  if (num == 0) return 1;
  else return num * calculateFactorial(num - 1);
}
console.log(calculateFactorial(8));

/*function factor (n:number){
  let a =1;
  if (n<0) {console.log("undefined")} else{
  for (let i=1;i<=n; i++)
   {a=a*i;} console.log(a);   }
  };
  factor(0);*/
