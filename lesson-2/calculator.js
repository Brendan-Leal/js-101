const readline = require("readline-sync");

console.log("Welcome to the Simple Calculator\n");

console.log("What is the fisrt number?");
let num1 = readline.question();

console.log("What is the second number?");
let num2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(num1) + Number(num2);
} else if (operation === '2') {
  output = Number(num1) - Number(num2);
} else if (operation === '3') {
  output = Number(num1) * Number(num2);
} else if (operation === '4') {
  output = Number(num1) / Number(num2);
}

console.log(`The result is: ${output}`);
