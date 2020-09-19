let readline = require("readline-sync");
const BLACKJACK = 21;
const SUITS = ['\u2764', '\u2756', '\u2660', '\u2663'];
let playAgain;

// console.log(SUITS);

do {
  let deck = initializeDeckOfCards();
  shuffle(deck);

  let playersHand = initializeHand(deck);
  let dealersHand = initializeHand(deck);
  let showDealersHand = false;
  let playersChoice;

  do {

    displayCardTable(playersHand, dealersHand, showDealersHand);
    if (isBlackjack(playersHand)) break;

    playersChoice = setPlayersChoice();

    if (playersChoice === "h") {
      playersHand.push(dealOneCard(deck));
    }

  } while (playersChoice === "h" &&
    !isBustingHand(playersHand) &&
    !isBlackjack(playersHand));

  showDealersHand = true;

  displayCardTable(playersHand, dealersHand, showDealersHand);

  let dealersTotal = calculateHandTotal(dealersHand);

  while (dealersTotal < 17) {
    if (isBustingHand(playersHand)) break;

    dealersHand.push(dealOneCard(deck));
    dealersTotal = calculateHandTotal(dealersHand);
  }

  displayWinner(playersHand, dealersHand, showDealersHand);

  playAgain = setPlayAgain();
} while (playAgain === "y");


//==============================================================================
function initializeDeckOfCards() {
  return [
    ["Ace", "Hearts"], ["2", "Hearts"], ["3", "Hearts"],
    ["4", "Hearts"], ["5", "Hearts"], ["6", "Hearts"],
    ["7", "Hearts"], ["8", "Hearts"], ["9", "Hearts"],
    ["10", "Hearts"], ["Jack", "Hearts"], ["Queen", "Hearts"],
    ["King", "Hearts"],

    ["Ace", "Diamonds"], ["2", "Diamonds"], ["3", "Diamonds"],
    ["4", "Diamonds"], ["5", "Diamonds"], ["6", "Diamonds"],
    ["7", "Diamonds"], ["8", "Diamonds"], ["9", "Diamonds"],
    ["10", "Diamonds"], ["Jack", "Diamonds"], ["Queen", "Diamonds"],
    ["King", "Diamonds"],

    ["Ace", "Clubs"], ["2", "Clubs"], ["3", "Clubs"],
    ["4", "Clubs"], ["5", "Clubs"], ["6", "Clubs"],
    ["7", "Clubs"], ["8", "Clubs"], ["9", "Clubs"],
    ["10", "Clubs"], ["Jack", "Clubs"], ["Queen", "Clubs"],
    ["King", "Clubs"],

    ["Ace", "Spades"], ["2", "Spades"], ["3", "Spades"],
    ["4", "Spades"], ["5", "Spades"], ["6", "Spades"],
    ["7", "Spades"], ["8", "Spades"], ["9", "Spades"],
    ["10", "Spades"], ["Jack", "Spades"], ["Queen", "Spades"],
    ["King", "Spades"]
  ];

  // return [["Ace", "Spades"], ["2", "Spades"], ["3", "Spades"],
  //   ["4", "Spades"], ["5", "Spades"], ["6", "Spades"]]; // 6 cards
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));

    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
}

function initializeHand(deck) {
  const TWO_CARDS = 2;
  let card = [];

  for (let cardsDealt = 1; cardsDealt <= TWO_CARDS; cardsDealt++) {
    let randomCardIndex = Math.floor(Math.random() * (deck.length - 1) + 1);

    card.push(deck[randomCardIndex]);
    removeCardFromDeck(deck, randomCardIndex);
  }
  return card;
}

function displayCardTable(playersCards, dealersCards, showHand) {
  console.clear();
  let playersTotal = calculateHandTotal(playersCards);
  let dealersTotal = calculateHandTotal(dealersCards);


  console.log("___________________________");
  console.log("_______Dealers Cards_______\n");
  if (showHand) {
    displayCards(dealersCards);
    console.log(`\nTotal: ${dealersTotal}`);
  } else {
    displayDealersCardsHidden(dealersCards)
  }
  console.log("___________________________");

  console.log("\n\n\n\n\n\n\n___________________________");
  console.log("_______Players Cards_______\n");
  displayCards(playersCards);
  console.log(`\nTotal: ${playersTotal}`);
  console.log("___________________________");
}

function isBlackjack(cards) {
  return calculateHandTotal(cards) === BLACKJACK && cards.length === 2;
}

function setPlayersChoice() {
  let choice = readline.question("Hit or stay (h/s)? ");

  while (!["h", "s"].includes(choice[0].toLowerCase())) {
    choice = readline.question("Hit or stay (h/s)? ");
  }
  return choice[0].toLowerCase();
}

function dealOneCard(deck) {
  let card = deck.slice(0, 1);

  removeCardFromDeck(deck, 0);
  // console.log(card);

  return card[0];
}

function removeCardFromDeck(deck, index) {
  deck.splice(index, 1);
}

function isBustingHand(cards) {
  let total = calculateHandTotal(cards);

  return total > BLACKJACK;
}

function displayWinner(playersHand, dealersHand, showDealersHand) {
  let dealersTotal = calculateHandTotal(dealersHand);
  let playersTotal = calculateHandTotal(playersHand);

  displayCardTable(playersHand, dealersHand, showDealersHand);

  if (isBlackjack(playersHand) && isBlackjack(dealersHand)) {
    console.log("Push, no winner");
  } else if (isBlackjack(playersHand)) {
    console.log("BACKJACK, YOU WIN!"); // check
  } else if (isBustingHand(dealersHand) && playersTotal <= BLACKJACK) { // check
    console.log("Dealer busts, you win!"); // check
  } else if (isBustingHand(playersHand) && dealersTotal <= BLACKJACK) {
    console.log("You busted, sorry not a winner"); // Check
  } else if (isBustingHand(playersHand) && isBustingHand(dealersHand)) { // check
    console.log("Sorry dealer wins even if we both bust"); //check
  } else if (dealersTotal > playersTotal) { // check
    console.log("Sorry, not a winner"); // check
  } else if (playersTotal > dealersTotal) { // check
    console.log("You win!"); // check
  }
}

function displayCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    let cardName = cards[i].join(" of ");

    console.log(cardName.padStart(cardName.length + 6));
  }
}

function displayDealersCardsHidden(dealersCards) {
  let visableCard = dealersCards[0].join(" of ");
  console.log(visableCard.padStart(visableCard.length + 6));
  console.log("      [Card Hidden]");
}

function setPlayAgain() {
  let choice = readline.question("Play another hand (y/n)?");

  while (!["y", "n"].includes(choice[0].toLowerCase())) {
    choice = readline.question("Play another hand (y/n)?");
  }
  return choice[0].toLowerCase();
}

function calculateHandTotal(cards) {
  let cardValues = cards.map(card => card[0]);

  let total = 0;

  cardValues.forEach((value) => {
    if (value === "Ace") {
      total += 11;
    } else if (["Jack", "Queen", "King"].includes(value)) {
      total += 10;
    } else {
      total += Number(value);
    }
  });

  cardValues.filter(value => value === "Ace").forEach((_) => {
    if (total > 21) total -= 10;
  });

  return total;
}
