const readline = require("readline-sync");
let again;
let apr = 0;

do {

  let loanAmount = getLoanAmount();
  let monthlyIntrestRate = getMonthlyIntrestRate();
  let loanDuration = getLoanDurration();
  let monthlyPayments = getMonthlyPayments(loanAmount, monthlyIntrestRate, loanDuration);

  //Formated output
  console.log(`\nWith the loan amount of $${loanAmount}`);
  console.log(`and an APR of ${apr}% for ${loanDuration} months,`);
  console.log(`your monthly payments will be $${monthlyPayments.toFixed(2)}`);

  //Ask the user if they want to calculate another loan
  console.log("\nDo you want to calculate another loan?");
  again = readline.question("[y/n] ");

  //Validate again to be 'y' or 'n'
  while (again.toLowerCase() !== 'y' && again.toLowerCase() !== "n") {
    console.log("Invalid input");
    again = readline.question("[y/n] ");
  }

} while (again.toLowerCase() === 'y');

function getLoanAmount() {
  //Prompt the user
  console.log("\nWhat is the amount loaned");
  let amount = readline.question("$ ");

  //Verify input is a number and that it is posative
  while ((Number.isNaN(parseFloat(amount))) || amount < 0) {
    console.log("Invalid Input");
    amount = readline.question("$ ");
  }

  //Convert amount which is of type String to type Number
  amount = Number(amount);

  return amount;
}

function getMonthlyIntrestRate() {
  //Prompt the user for APR
  console.log("\nWhat is the annual percent rate (APR). Entered as a percentage.");
  let percent = readline.question("% ");

  //Verify the input is a whole Number and it is posative
  while ((Number.isNaN(parseInt(percent, 10))) || percent < 0) {
    console.log("Invalid Input");
    percent = readline.question("% ");
  }

  // Check if it's a zero % intrest loan
  if (percent === 0) {
    apr = percent;
    return percent;

  } else {
    //Save APR value to be used in the final output
    apr = percent;

    //Convert the percent to decimal form
    percent /= 100;

    //divide by 12 months
    percent = Number(percent / 12);

    return percent;
  }
}

function getLoanDurration() {
  //Prompt user
  console.log("\nHow long is the term of your loan in months");
  let term = readline.question("Months: ");

  //Validate term to be a whole Number
  while ((Number.isNaN(parseInt(term, 10))) || term <= 0) {
    console.log("Invalid Input");
    term = readline.question("Months: ");
  }

  //Convert term which is of type String into type Number
  term = Number(term);

  return term;
}

function getMonthlyPayments(loanAmount, monthlyIntrestRate, loanDuration) {
  //Handle the 0% APR case
  if (monthlyIntrestRate === 0) {
    return loanAmount / loanDuration;
  } else { //APR is not 0%
    //Split up the math so it's easier to manage the denominator.
    let denominator = 1 - (Math.pow((1 + monthlyIntrestRate), (-loanDuration)));
    let payments = loanAmount * (monthlyIntrestRate / denominator);

    return payments;
  }
}
