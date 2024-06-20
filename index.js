// // The human score and computer score
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

// DOM
let newRock = document.getElementById("rock");
let newPaper = document.getElementById("paper");
let newScissors = document.getElementById("scissors");
let rock = document.createElement("p");
let paper = document.createElement("p");
let scissors = document.createElement("p");
let newResults = document.createElement("p");
let gameDecision = document.createElement("p");

//Write ComputerChoice function that will randomly return a of the strings "Rock, Paper, Scissors"
function getComputerChoice() {
  let newGame = ["rock", "paper", "scissors"];
  let random = newGame[Math.floor(Math.random() * newGame.length)];
  return random;
}

//Next you'll get the human choice
function getHumanChoice() {
  let user = prompt("Pick one!");
  return user;
}

// PlayRound
function playRound(getHumanChoice, getComputerChoice) {
  if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    newResults.textContent = `You Lose, Computer Score: ${computerScore}`;
    game.appendChild(newResults);
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore += 1;
    newResults.textContent = `You Win! Player Score: ${humanScore}`;
    game.appendChild(newResults);
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore += 1;
    newResults.textContent = `You Win, Player Score: ${humanScore}`;
    game.appendChild(newResults);
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore += 1;
    newResults.textContent = `You Win, Player Score: ${humanScore}`;
    game.appendChild(newResults);
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    newResults.textContent = `You Lose, Computer Score: ${computerScore}`;
    game.appendChild(newResults);
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    newResults.textContent = `You Lose!, Computer Score: ${computerScore}`;
    game.appendChild(newResults);
  } else {
    newResults.textContent = "tie";
    game.appendChild(newResults);
  }
}

//Events

//This will be a function called winner. Which it will determine who is the winner
function winner() {
  if (humanScore > computerScore) {
    gameDecision.textContent = "You Win!";
    game.appendChild(gameDecision);
  } else if (humanScore < computerScore) {
    gameDecision.textContent = "Computer Win";
    game.appendChild(gameDecision);
  }
}

//Rounds: There is going to be a couple of rounds of this game.
function playGame() {
  for (let i = 0; i < 7; i++) {
    playRound();
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    humanScore;
    computerScore;
  }
}

playGame();
winner();
