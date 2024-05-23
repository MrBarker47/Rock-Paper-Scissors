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
    console.log("tie");
  }
}

function winner() {
  if (humanSelection == 5 || computerSelection == 5) {
    console.log("Player Wins");
  } else {
    console.log("Computer Wins!");
  }
}

// function winner() {
//   if (humanSelection === 5) {
//     console.log("Player Wins, the game!");
//   } else if (computerSelection === 5) {
//     console.log("Computer Wins, the game");
//   }
// }

//Rounds: There is going to be a couple of rounds of this game.
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;
  }
  console.log(humanScore++);
  console.log(computerScore++);
}

game();
