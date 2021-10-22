{
// make it bigger by 10
let a: number = 3;
a=a+10;
console.log(a);

// make it smaller by 7
let b: number = 100;
b=b-7;
console.log(b);

// double c's value
let c: number = 44;
c*=2;
console.log(c);

// divide d's value by 5
let d: number = 125;
d/=5;
console.log(d);

// what's the cube of e's value?
let e: number = 8;
e=Math.pow(e,2);
console.log(e);
console.log("")

// tell if f1 is bigger than f2 (as a boolean)
let f1: number = 123;
console.log('f1='+f1);
let f2: number = 345;
console.log('f2='+f2);
let f3:boolean=(f1>f1);
console.log('Is f1  bigger than f2?:');
console.log(f3); 
console.log("");

// tell if the double of g2 is bigger than g1 (as a boolean)
let g1: number = 350;
console.log('g1='+g1);
let g2: number = 200;
console.log('g2='+g2);
let g3:boolean=(g2*2>g1);
console.log('The double of g2 is bigger than g1?:');
console.log(g3);
console.log("");

// tell if 11 is a divisor of h (as a boolean)
let h: number = 1357988018575474;
console.log("h="+h);
let i: number=h/11;
let ir=Math.round(i);
let divisor:boolean=(i==ir);
console.log("Is 11 a divisor of h?:");
console.log(divisor);
console.log("");

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let i1: number = 10;
console.log("i1="+i1);
let i2: number = 3;
console.log("i2="+i2);
let i3 :boolean=(i1>Math.pow(i2,2));
console.log('Is i1 higher than i2 squared?:');
console.log(i3);
let i4 :boolean=(i1<Math.pow(i2,3));
console.log('Is i1 smaler than i2 cubed?:');
console.log(i4);
console.log("");

// tell if j is divisible by 3 or 5 (as a boolean)
let j: number = 1521;
console.log("j= "+j);
let j3=j/3;
let j3ro=(Math.round(j3));
let jdiv3:boolean=(j3==j3ro);
console.log("Is j divisible by 3?:");
console.log(jdiv3);
let j5=j/5;
let j5ro=(Math.round(j5));
let jdiv5:boolean=(j5==j5ro);
console.log("Is j divisible by 5?:");
console.log(jdiv5);
}