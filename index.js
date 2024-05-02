// Declaring The Players Score
let humanScore = 0;
let computerScore = 0;

const button1 = document.getElementById("rock");
const button2 = document.getElementById("paper");
const button3 = document.getElementById("scissors");

// The computer choice
function getComputerChoice() {
  let newGame = ["rock", "paper", "scissors"];
  let random = newGame[Math.floor(Math.random() * newGame.length)];
  return random;
}

// How the game will depending on what the player and computer selects
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    console.log("You Lose! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    humanScore += 1;
    console.log("You Win! Paper beats rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    humanScore += 1;
    console.log("You Win! Scissors beat paper");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    humanScore += 1;
    console.log("You Win! Rock beat scissors");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    console.log("You Lose! Scissors beat paper ");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    console.log("You Lose! Rock beats scissors");
  } else {
    console.log("tie");
  }
}

// The amount rounds it will go. It suppose to go for 5 rounds.
function playGame(playerSelection, computerSelection) {
  let player = playerSelection;
  let computer = computerSelection;
  for (let i = 0; i < playRound.length; i++) {
    console.log(playerSelection);
    console.log(computerSelection);
  }
}

button1.addEventListener("click", playRound);
button2.addEventListener("click", playRound);
button3.addEventListener("click", playRound);
let computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// playGame(playRound(playerSelection, computerSelection));
// playGame(playRound(computerSelection, playerSelection));
// playGame(playRound(playerSelection, computerSelection));
// playGame(playRound(computerSelection, playerSelection));
