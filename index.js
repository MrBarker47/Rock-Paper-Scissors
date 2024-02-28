//Create a function called getComputerChoice()
//Randomly return rock paper scissors 

// let odin = prompt("Rock, Paper, Scissors Shoot");

function getComputerChoice() {
        
        let newGame = ['rock', 'paper', 'scissors'];     
        let random = newGame[Math.floor(Math.random() * newGame.length)];
        return random;
    }

    //  let newGame = ['rock', 'paper', 'scissors'];
    //  let result = getComputerChoice(newGame);
    //  console.log(result);

     
    function playRound(playerSelection, computerSelection) {

      if(playerSelection == computerSelection) {
        console.log("It's a tie");
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
            console.log('You Win! rock beats scissors');
        } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
            console.log('You Lose! Scissors beat paper')
        } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
            console.log('You Lose! Rock beats Scissors')
        } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
            console.log('You Lose! Paper beats rock')
        } else if ((playerSelection === ''))  {

        }

    }
  

  let playerSelection = prompt("Rock, Paper, Scissors Shoot");
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

