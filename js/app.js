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
const cardsEl = document.querySelector(".cards");

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

  render();
}

function render() {
}

// function shuffleCards() {
    // let randomIndex =Math.floor(Math.random() * cardImage.length)
    // let ranIndex =Math.floor(Math.random() * cardGrid.length)
//     for (let i = cardGrid.length - 1; i > 0; i--) {
//         let randomIndex = Math.floor(Math.random() * cardGrid.length);
//         console.log(randomIndex) 
//         console.log(cardGrid)
//     }

//     let currentIndex = 0;
//     for (let i = 0; i < cardGrid.length; i++) {
//         for (let j = 0; j < cardGrid[i].length; j++)

//             cardGrid[i][j] = currentIndex++;

// }
// }
function shuffleCards(card) {

    const shuffledImages = cardImage.sort(() => Math.random() - 0.5);

    // Assign shuffled images to the cardGrid array
    let cardIndex = 0;
    for (let i = 0; i < cardGrid.length; i++) {
        for (let j = 0; j < cardGrid[i].length; j++) {
            cardGrid[i][j] = shuffledImages[cardIndex++];
        }
    }
 
    console.log(cardGrid);
}

shuffleCards();
console.log(cardGrid)

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
    console.log(event.target.id)

})

startButton.addEventListener("click",(event) => {
    console.log(event.target.id)
})

