const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

prompt("Enter your name: ");
let name = readline.question();

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

    //Need to pause the screen to show message
    prompt("Press enter to continue");
    readline.question();

  } else if (choice === computerChoice) {
    prompt("It's a tie");

    //Need to pause the screen to show message
    prompt("Press enter to continue");
    readline.question();

  } else {
    prompt("Computer Wins!");

    //Need to pause the screen to show message
    prompt("Press enter to continue");
    readline.question();
  }
}

function displayScoreBoard(userWins, computerWins) {
  console.log("---------------");
  console.log(`Score`);
  console.log(`${name}: ${userWins}\nComputer: ${computerWins}`);
  console.log("---------------");
}

function updateUserWins(choice, computerChoice, userWins) {
  //If the user wins then we need to add one to the userWin value
  if ((choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'scissors' && computerChoice === 'paper')) {
    userWins += 1;
    return userWins;
  } else {
    //User lost keep score as is
    return userWins;
  }
}

function updateComputerWins(choice, computerChoice, computerWins) {
  //If the computer wins then we need to add one to the computerWins value
  if ((choice === 'rock' && computerChoice === 'paper') ||
  (choice === 'paper' && computerChoice === 'scissors') ||
  (choice === 'scissors' && computerChoice === 'rock')) {
    computerWins += 1;
    return computerWins;
  } else {
    //computer lost keep score as is
    return computerWins;
  }
}

function displayGameOver(userWins, computerWins) {
  console.clear();
  displayScoreBoard(userWins, computerWins);
  prompt("GAME OVER");
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
  let userWins = 0;
  let computerWins = 0;

  do {
    console.clear();

    displayScoreBoard(userWins, computerWins);

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

    userWins = updateUserWins(choice, computerChoice, userWins);
    computerWins = updateComputerWins(choice, computerChoice, computerWins);

    displayWinner(choice, computerChoice);

    //Who ever wins 3 games first wins
    if (userWins === 3 || computerWins === 3) {
      displayGameOver(userWins, computerWins);
    }
  } while (computerWins < 3 && userWins < 3);
} while (playAgain() === 'y');
