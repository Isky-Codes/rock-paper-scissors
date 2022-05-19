//The function below is to generate one of the three choices available (ie. rock, paper, or scissors) and storing it in a variable to identify what the computer will choose

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 100); //Provides a random number
    if(computerChoice <= 33) { //If number is less than a third of 100, provide rock
        return 'rock';
    }else if(computerChoice <= 66) { //If number is less than two-thirds, provide scissors
        return 'scissors';
    }else {
        return 'paper'; //If number is above 66, provide paper
    }
};

function playRockPaperScissors(playerSelection, computerSelection) {
    //If statement to compare the selections and indicate the winners

    if(playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock"
    }else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors"
    }else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats Paper"
    }else {
        return "It's a tie"
    }
}

function game() {

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter a choice of rock, paper, or scissors to play').toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRockPaperScissors(playerSelection, computerSelection));
    }
}