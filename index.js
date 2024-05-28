// The human score and computer score
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

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

//PlayRound: This is how the game is going to go.
function playRound(getHumanChoice, getComputerChoice) {
  if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    console.log(`You Lose, Computer Score: ${computerScore}`);
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore += 1;
    console.log(`You Win! Player Score: ${humanScore}`);
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore += 1;
    console.log(`You Win, Player Score: ${humanScore}`);
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore += 1;
    console.log(`You Win, Player Score: ${humanScore}`);
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    console.log(`You Lose, Computer Score: ${computerScore}`);
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    console.log(`You Lose!, Computer Score: ${computerScore}`);
  } else {
    console.log("tie game");
  }
}

//This will be a function called winner. Which it will determine who is the winner
function winner() {
  if (humanSelection < computerSelection) {
    console.log("Player Wins!");
  } else if (computerSelection > humanSelection) {
    console.log("Computer Wins");
  }
}

//Rounds: There is going to be a couple of rounds of this game.
function game() {
  for (let i = 0; i < 7; i++) {
    playRound();
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    humanScore;
    computerScore;
  }
}
game();
winner();
