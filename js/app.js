let cardGrid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];
let cards;
let flippedCards = false;
let flippedString = false;
let wrongFlips = 0;
const maxWrongFlips = 6;
let matchedPairs = 0;
let firstCard = null;
let secondCard = null;
let moves = 0;
let startGame;
let stayUp = false;

const cardGridEl = document.querySelector("#gameBoard");
const startButton = document.querySelector(".startButton");
const resetButton = document.querySelector(".resetButton");
const movesEl = document.querySelector(".moves");
const cardsEl = document.querySelectorAll(".card");
const cardBack = document.querySelector(".back").img

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
  "/Assets/card10.jpg"
];

function init() {
  shuffleCards()
  render();
}

function render() {
let cardIndex = 0;
cardsEl.forEach((card) => {
    const cardImageElement = card.querySelector('.back img');
    cardImageElement.src = cardGrid[Math.floor(cardIndex / 5)][cardIndex % 5];
    cardIndex++;
});
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

//.src is grabbing the image that is a child within the .card div 
//3 index of the children
//path is grabbing only part we need (short pathway)
function flipCard(card) {
    const string = card.childNodes[3].children[0].src
    const path = string.substring(string.indexOf('/Assets'));
    card.style.backgroundImage = `url(.${path})`
}

//console.log(cardBack)


// shuffleCards();

function reveal() {

}

function revealAll() {

}

function flipBackCards() {

}

function flipCards() {

}

function checkMatch() {

}

function checkForWinner() {

}

function gameOver() {

}

init();

cardGridEl.addEventListener("click",(event) => {
    console.log(event.target)
    flipCard(event.target)


})

startButton.addEventListener("click",(event) => {
    console.log(event.target.id)
})
