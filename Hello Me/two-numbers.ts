// Create a program that prints a few operations on two numbers: 22 and 13

// Print the result of 13 added to 22

// Print the result of 13 substracted from 22

// Print the result of 22 multiplied by 13

// Print the result of 22 divided by 13 (as a decimal fraction)

// Print the remainder of 22 divided by 13
let a:number=22;
console.log('a=22');
let b:number=13;
console.log('b=13');
let c:number=a+b;
console.log('a+b='+c);
let d:number=a-b;
console.log('a-b='+d);
let e:number=a*b;
console.log('a*b='+e);
let f:number=a/b;
console.log('a/b='+f);
let g=Math.floor(f)
let h=a-(b*g)
console.log('remainder of "a" divided by "b"= '+h);
