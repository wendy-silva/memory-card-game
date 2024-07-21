let cardGrid = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
let cards;
let flippedCards = false;
let flippedString = false;
const maxWrongFlips = 6;
let matchedPairs = 0;
let firstCard = null;
let secondCard = null;
let moves = 0;
let lockBoard = false;
let lastClick;

const cardGridEl = document.querySelector("#gameBoard");
const startButton = document.querySelector(".startButton");
const resetButton = document.querySelector(".resetButton");
const movesEl = document.querySelector(".moves");
const cardsEl = document.querySelectorAll(".card");
const cardBack = document.querySelector(".back").img;
const messagesEl = document.querySelector("#messages");
const messagesElTwo = document.querySelector("#messagesTwo");
const loadingScreenEl = document.querySelector("#loadingScreen");
const gameContentEl = document.querySelector(".game-content");

const cardImage = [
  "/Assets/card1.jpg",
  "/Assets/card2.jpg",
  "/Assets/card3.jpg",
  "/Assets/card4.jpg",
  "/Assets/card5.jpg",
  "/Assets/card6.jpg",
  "/Assets/card7.jpg",
  "/Assets/card8.jpg",
  "/Assets/card9.jpg",
  "/Assets/card10.jpg",
  "/Assets/card1.jpg",
  "/Assets/card2.jpg",
  "/Assets/card3.jpg",
  "/Assets/card4.jpg",
  "/Assets/card5.jpg",
  "/Assets/card6.jpg",
  "/Assets/card7.jpg",
  "/Assets/card8.jpg",
  "/Assets/card9.jpg",
  "/Assets/card10.jpg",
];

function init() {
  shuffleCards();
  render();
  attachCardListeners();
  startButton.addEventListener("click", startGame);
  resetButton.addEventListener("click", resetGame);
}

function startGame() {
  loadingScreenEl.style.display = "none";
  gameContentEl.style.display = "block";
  revealAll();
}

function render() {
  updateGame();
}

function shuffleCards() {
  const shuffledImages = cardImage.sort(() => Math.random() - 0.5);

  // Assign shuffled images to the cardGrid array
  let cardIndex = 0;
  for (let i = 0; i < cardGrid.length; i++) {
    for (let j = 0; j < cardGrid[i].length; j++) {
      cardGrid[i][j] = shuffledImages[cardIndex++];
    }
  }
}

function updateGame() {
  let cardIndex = 0;
  cardsEl.forEach((card) => {
    const cardImageElement = card.querySelector(".back img");
    cardImageElement.src = cardGrid[Math.floor(cardIndex / 5)][cardIndex % 5];
    cardIndex++;
  });
}

function flipCard(card) {
  if (lockBoard || card === firstCard) return;

  const string = card.childNodes[3].children[0].src;
  const path = string.substring(string.indexOf("/Assets"));
  card.style.backgroundImage = `url(.${path})`;

  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    lockBoard = true;
    checkMatch();
  }
}

function revealAll() {
  // Reveal all cards
  cardsEl.forEach((card) => {
    const string = card.childNodes[3].children[0].src;
    const path = string.substring(string.indexOf("/Assets"));
    card.style.backgroundImage = `url(.${path})`;
  });

  // Hide all cards after 3 seconds
  setTimeout(() => {
    cardsEl.forEach((card) => {
      card.style.backgroundImage = "url(/Assets/halloween-pattern.jpg)";
    });
  }, 3000);
}

function checkMatch() {
  const firstImage = firstCard.querySelector(".back img").src;
  const secondImage = secondCard.querySelector(".back img").src;

  if (firstImage === secondImage) {
    disableClick();
    matchedPairs++;
    checkForWinner();
    resetBoard();
  } else {
    flipBackCards();
    moves++;
    movesEl.textContent = `${moves}`;
    if (moves >= maxWrongFlips) {
      gameOver();
    }
  }
}

function checkForWinner() {
  if (matchedPairs === cardImage.length / 2) {
    messagesEl.textContent = "You win!";
    messagesElTwo.textContent = "";
  }
}

function disableClick() {
  firstCard.removeEventListener("click", handleCardClick);
  secondCard.removeEventListener("click", handleCardClick);
}

function flipBackCards() {
  setTimeout(() => {
    firstCard.style.backgroundImage = "url(/Assets/halloween-pattern.jpg)";
    secondCard.style.backgroundImage = "url(/Assets/halloween-pattern.jpg)";
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function handleCardClick(event) {
  if (moves >= maxWrongFlips) return; // Prevent further clicks if maxWrongFlips is reached
  const card = event.target.closest(".card");
  if (card) {
    flipCard(card);
  }
}

function attachCardListeners() {
  cardsEl.forEach((card) => {
    card.addEventListener("click", handleCardClick);
  });
}

function resetGame() {
  matchedPairs = 0;
  moves = 0;
  movesEl.textContent = `${moves}`;
  messagesEl.textContent = ""; // Clears any messages
  messagesElTwo.textContent = ""; // Clears any "Game Over" message
  shuffleCards();
  updateGame();
  revealAll();
  setTimeout(() => {
    cardsEl.forEach((card) => {
      card.style.backgroundImage = "url(/Assets/halloween-pattern.jpg)";
      card.addEventListener("click", handleCardClick);
    });
  }, 3000); // Re-hide the cards after 3 seconds
  resetBoard();
  lockBoard = false; // Ensure the board is unlocked for a new game
}

function gameOver() {
  messagesEl.textContent = "";
  messagesElTwo.textContent = "Game Over!";
  lockBoard = true; // Disable further interactions
}

init();
