let readline = require("readline-sync");
const MAX_GAMES = 5;
const AVAILABLE_SPACE = " ";
const HUMAN_MARK = "X";
const COMPUTER_MARK = "O";

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("Cat's Game");
  }

  prompt("Play Again? (y/n)");
  let answer = readline.question().toLowerCase()[0];
  if (answer !== "y") break;
}

prompt("Thanks for playing Tic-Tac-Toe");

//==============================================================================
function joinOr(emptySquares, lastItemDelimiter) {
  let lastIndex = emptySquares.length - 1;
  let lastItem = emptySquares[lastIndex];
  let list = emptySquares.slice(0, lastIndex);

  if (emptySquares.length === 1) {
    return emptySquares;
  } else {
    return `${list} ${lastItemDelimiter} ${lastItem}`;
  }
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARK &&
      board[sq2] === HUMAN_MARK &&
      board[sq3] === HUMAN_MARK
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARK &&
      board[sq2] === COMPUTER_MARK &&
      board[sq3] === COMPUTER_MARK
    ) {
      return "Computer";
    }
  }
  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function prompt(question) {
  console.log(`=> ${question}`);
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = AVAILABLE_SPACE;
  }
  return board;
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARK}\nComputer is ${COMPUTER_MARK}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log('     |     |');
  console.log('');
}

function playerChoosesSquare(board) {
  let square;

  do {
    // prompt(`Choose a square ${emptySquares(board).join(", ")}: `);
    prompt(`Squares available ${joinOr(emptySquares(board), "and")}`);

    square = readline.question();

  } while (!emptySquares(board).includes(square));

  board[square] = HUMAN_MARK;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARK;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === AVAILABLE_SPACE);
}
