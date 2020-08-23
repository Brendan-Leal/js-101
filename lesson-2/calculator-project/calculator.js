const readline = require("readline-sync");
let repeat;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("Welcome to the simple calculator!");

do {

  prompt("What is the fisrt number?");
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    num1 = readline.question();
  }

  prompt("What is the second number?");
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    num2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("Must choose 1, 2, 3 or 4");
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }

  prompt(`The result is: ${output}\n`);

  prompt("Do you want to do another calculation [y/n]");
  repeat = readline.question();

  while (!["y", "n", "Y", "N"].includes(repeat)) {
    prompt("Invalid choice!");
    prompt("Do you want to do another calculation [y/n]");
    repeat = readline.question();
  }

} while (repeat === "y" || repeat === "Y");
