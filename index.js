//Create a function called getComputerChoice()
//Randomly return rock paper scissors 

// let odin = prompt("Rock, Paper, Scissors Shoot");

function getComputerChoice() {
        
        let newGame = ['rock', 'paper', 'scissors'];     
        let random = newGame[Math.floor(Math.random() * newGame.length)];
        return random;
    }

    

  

    function playRound(playerSelection, computerSelection) {

        if(playerSelection === computerSelection) {
            console.log('its a tie')     
            } else if(playerSelection === 'rock' && computerSelection === 'paper') {
            console.log('You Lose! Paper beats rock');
            } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                console.log('You Win! Paper beats rock');
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                    console.log('You Win! Scissors beat paper');
            } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log('You Win! Scissors beat rock');
            } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                console.log('You Lose! Scissors beat paper ') 
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log('You Lose! Rock beats scissors')
           
        }
     }

           function playGame() {
            for (let i = 0; i < 5; i++) {
                console.log(playRound());
            }
           }

           
 

        let playerSelection = prompt("Rock, Paper, Scissors Shoot");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
          

         playGame();
   


  
  









 
