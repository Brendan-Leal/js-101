const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

//Formats the output
function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  //Logic that decides the winner
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function playAgain() {
  //Ask user if they want to play again
  prompt("Do you want to play again [y/n]");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== "n" && answer[0] !== 'y') {
    prompt('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

do {
  console.clear();

  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  //If the user's choice is not in the array then ask for input again
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a vaild choice.");
    choice = readline.question();
  }

  //Generate a random number 0-2 inclusive
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

} while (playAgain() === 'y');
