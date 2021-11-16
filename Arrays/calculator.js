// Create a simple calculator application which reads parameters from the prompt
// and prints the result back to the prompt
// It should support one of the following operators: +, -, *, /, %
// and two operands
// The format of the input expressions must be: {operator} {operand} {operand}
// Input examples:
//    "+ 3 3" (the result will be 6)
//    "* 4 4" (the result will be 16)
// To make it work create a method named "calculate()" and use the Scanner class
// to get input from the user

// The process should work like this:
// - Start the program
// - Print: "Please type in the expression:"
//   (Wait for the user input)
// - After receiving the input print the result number to the prompt
// - Exit the program

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(
  "Please give your input here {operator: +, -, *, /, %} {operand} {operand}, like this: * 5 8: ",
  (input) => {
    var result = 0;
    const splitinput = input.split(" ");
    console.log(splitinput);
    let inputa = splitinput[1] * 1;
    let inputb = splitinput[2] * 1;
    if (splitinput[0] === "+") {
      result = inputa + inputb;
    } else if (splitinput[0] === "*") {
      result = inputa * inputb;
    } else if (splitinput[0] === "/") {
      result = inputa / inputb;
    } else if (splitinput[0] === "-") {
      result = inputa - inputb;
    } else if (splitinput[0] === "%") {
      result = (inputb / inputa) * 100 + "%";
    }

    console.log(result);
    readline.close();
  }
);
