//The function below is to generate one of the three choices available (ie. rock, paper, or scissors) and storing it in a variable to identify what the computer will choose

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 100);
    if(computerChoice <= 33) { 
        return 'rock';
    }else if(computerChoice <= 66) { 
        return 'scissors';
    }else {
        return 'paper'; 
    }
};

const computerSelection = computerPlay()

function playRound(playerSelection, computerSelection) {

    if(playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock"
    }else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors"
    }else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats Paper"
    }else if(!playerSelection || !computerSelection) {
        return "Error"
    }else {
        return "It's a tie!"
    }
}

































// function playGame() {

//     for(let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Enter a choice of rock, paper, or scissors to play').toLowerCase();
//         let computerSelection = computerPlay();
//         console.log(playRockPaperScissors(playerSelection, computerSelection));
//     }
// }
