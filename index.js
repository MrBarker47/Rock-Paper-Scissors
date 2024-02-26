//Create a function called getComputerChoice()
//Randomly return rock paper scissors 

// let odin = prompt("Rock, Paper, Scissors Shoot");

function getComputerChoice(game) {
        
        const random = Math.floor(Math.random() * game.length);
        const item = game[random];
        
        return item;
    }

     let newGame = ['rock', 'paper', 'scissors'];
     let result = getComputerChoice(newGame);
     console.log(result);

     
    function playRound(playerSelection, computerSelection) {

      if(playerSel