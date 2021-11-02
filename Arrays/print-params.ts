// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
function printParams() {
  let longest = "";
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
