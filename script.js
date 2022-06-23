// _________________________________________________________ //
//                  ALL THE HTML ELEMENTS
// _________________________________________________________ //
// messages
const mainMessage = document.querySelector('.mainMessage');
// player messages
const playerMessage = document.querySelector('.playerDisp');
// score counter will only get the score in str format
let scoreCounter = document.querySelector('#score');
// dice image
const diceImage = document.querySelector('.diceImage');
// move button
const rollButton = document.querySelector('.moveButton');
// retry button
// const retryButton = document.querySelector('.retryButton');

// _________________________________________________________ //
//                  INITIALISE VARIABLES
// _________________________________________________________ //
let score = 0;          // contains the player score
let totalWins;      // how many time they won
let totalLoss;      // how many times they lost
let move;
let rotNo = 0;
// let shuffleNo = 0;
let shuffleTimes = 10;  // shake dice limit

// _________________________________________________________ //
//                      MAIN LOOP
// _________________________________________________________ //

clearMessages();

rollButton.addEventListener("click", (event) => {


    for (let i = 0; i < shuffleTimes; i++) {
        // dice rolloing pause message
        setTimeout(() => { mainMessage.textContent = "Rolling ..." }, 2000);
        randNo = makePlayerMove(rotNo);
        showDice(randNo.toString(), rotNo);
    }

    if (randNo === 1) {
        open.currentTime = 10;
        score = 0;
        mainMessage.textContent = "You Lost... Try Again ?"

    }
    else {
        score = parseInt(score) + parseInt(randNo);
        console.log(score);
        scoreCounter.textContent = score;

        if (score >= 20) {
            open.currentTime = 10;
            score = 0;
            mainMessage.textContent = "You Won... Try Again ?"
        }
    }
});


// _________________________________________________________ //
//                  ALL THE FUNCTIONS
// _________________________________________________________ //
// show dice
function showDice(move, rotNo) {
    switch (move) {
        case "1":
            diceImage.src = './img/1.png';
            diceImage.style.display = "block";
            diceImage.style.transform = `rotate(${rotNo}})`;
            break;

        case "2":
            diceImage.src = './img/2.png';
            diceImage.style.display = "block";
            diceImage.style.transform = `rotate(${rotNo}})`;
            break;

        case "3":
            diceImage.src = './img/3.png';
            diceImage.style.display = "block";
            diceImage.style.transform = `rotate(${rotNo}})`;
            break;

        case "4":
            diceImage.src = './img/4.png';
            diceImage.style.display = "block";
            diceImage.style.transform = `rotate(${rotNo}})`;
            break;

        case "5":
            diceImage.src = './img/5.png';
            diceImage.style.display = "block";
            diceImage.style.transform = `rotate(${rotNo}})`;
            break;

        case "6":
            diceImage.src = './img/6.png';
            diceImage.style.display = "block";
            diceImage.style.transform = `rotate(${rotNo}})`;
            break;

    }

}

// clear messages
function clearMessages() {
    diceImage.style.display = "none";
    score = 0;

}
// make a move
function makePlayerMove(rotNo) {
    // randomn no. generator
    randNo = Math.floor(Math.random() * 6) + 1;
    rotNo += 45;
    return randNo;
}

