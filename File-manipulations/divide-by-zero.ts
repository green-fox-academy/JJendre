// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0
function divideTen(parameter: number) {
  if (parameter != 0) {
    return 10 / parameter;
  } else return 'fail';
}
console.log(divideTen(0));
