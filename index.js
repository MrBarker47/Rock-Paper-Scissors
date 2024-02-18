//Create a function called getComputerChoice()
//Randomly return rock paper scissors 
function getComputerChoice() {
    return  ['rock', 'paper', 'scissors']
}


//Create a playRound() function, with two parameters 
//That returns a you lose! paper beats rock 
function playRound(playerSelection, computerSelection) {

}


let playerSelection; 
let computerSelection = getComputerChoice();

if(playerSelection === 'paper') {
    console.log('You Won! Paper beats rock');
} else if(playerSelection === 'rock') {
    console.log('You Lose! Paper beats rock' )
} else if(playerSelection === 'scissors') {
    console.log('You Win! Scissors beat paper')
}  
     




//Create a new functions called playGame function







/* Use the previous function inside of this one 
play a five round games that keeps score and lets you know 
a winner and loser at the end 
*/
