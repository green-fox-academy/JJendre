// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
{
const d = new Date();
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
let x=(24*3600)-((hour*3600)+(minute*60)+second);
console.log('The current remaining seconds from today: '+x);
};
