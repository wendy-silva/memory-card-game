let cardGrid = [];
let cards;
let flippedCards = [];
let wrongFlips = 0;
const maxWrongFlips = 6;
let matchedPairs = 0;
let firstCard = null;
let secondCard = null;
let moves = 0;
let startGame;

const cardGridEl = document.querySelector("#grid-container");
const startButton = document.querySelector(".startButton");
const resetButton = document.querySelector(".resetButton");
const movesEl = document.querySelector(".moves");
const cardsEl = document.querySelector(".cards");

const cardImage = [
  "Assets/card 1.jpg",
  "Assets/card 6.jpg",
  "Assets/card 7.jpg",
  "Assets/card 8.jpg",
  "Assets/card 9.jpg",
  "Assets/card 10.jpg",
  "Assets/card 11.jpg",
  "Assets/card 12.jpg",
  "Assets/card 13.jpg",
  "Assets/card 14.jpg",
  "Assets/card 1.jpg",
  "Assets/card 6.jpg",
  "Assets/card 7.jpg",
  "Assets/card 8.jpg",
  "Assets/card 9.jpg",
  "Assets/card 10.jpg",
  "Assets/card 11.jpg",
  "Assets/card 12.jpg",
  "Assets/card 13.jpg",
  "Assets/card 14.jpg",
];

function init() {
  cardGrid = [
    ["0", "1", "2", "3", "4"],
    ["5", "6", "7", "8", "9"],
    ["10", "11", "12", "13", "14"],
    ["15", "16", "17", "18", "19"],
  ];
  render();
}

function render() {
}
function shuffleCards() {
  let flatGrid = cardGrid.flat();

  for (let i = flatGrid.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [flatGrid[i], flatGrid[j]] = [flatGrid[j], flatGrid[i]];
  }

  let newGrid = [];
  let gridSize = cardGrid.length;
  let rowSize = cardGrid[0].length;

  for (let i = 0; i < gridSize; i++) {
    newGrid.push(flatGrid.slice(i * rowSize, (i + 1) * rowSize));
  }

  cardGrid = newGrid;
}

init();
shuffleCards();

cardGridEl.addEventListener("click",(event) => {
    console.log(event.target.id)

})

startButton.addEventListener("click",(event) => {
    console.log(event.target.id)
})

