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

function playRound(playerSelection, computerSelection) {

    let playerScoreCounter = 0;
    let computerScoreCounter = 0;
    console.log(playerScoreCounter);

    if(playerSelection === 'rock' && computerSelection === 'paper') {
        document.querySelector('.resultsContainer h1').innerText = "You Lose! Paper beats Rock";
    
    }else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScoreCounter += 1;
        document.querySelector('.resultsContainer h1').innerText = "You Win! Rock beats Scissors";
    
    }else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        document.querySelector('.resultsContainer h1').innerText = "You lose! Scissors beats Paper";
    
    }else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScoreCounter += 1;
        document.querySelector('.resultsContainer h1').innerText = "You win! Paper beats Rock";
        
    
    }else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        document.querySelector('.resultsContainer h1').innerText = 'You lose! Rock beats Scissors';
    
    }else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScoreCounter += 1;
        document.querySelector('.resultsContainer h1').innerText = "You win! Scissors beats Paper";
        
    
    }else if(playerSelection === computerSelection) {
        document.querySelector('.resultsContainer h1').innerText = "It's a tie";
    
    }else {
        document.querySelector('.resultsContainer h1').innerText = "Error";
    }
    
    document.querySelector('.resultsContainer p').innerText = playerScoreCounter
}

document.querySelector('.rockBtn').addEventListener('click', playRock)

function playRock() {
    let playerSelection = document.querySelector('.rockBtn').value;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

document.querySelector('.paperBtn').addEventListener('click', playPaper)

function playPaper() {
    let playerSelection = document.querySelector('.paperBtn').value;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

document.querySelector('.scissorsBtn').addEventListener('click', playScissors)

function playScissors() {
    let playerSelection = document.querySelector('.scissorsBtn').value;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}


























// function buttonPlay(e) {
//     let playerSelection = e.srcElement.value;
//     let computerSelection = computerPlay();
//     playRound(playerSelection, computerSelection);
// }

// const buttons = document.getElementsByClassName('btn');
// for (button of buttons) {
//     button.addEventListener('click', buttonPlay)
// }

// function playRound(playerSelection, computerSelection) {

//     let playerScoreCounter = 0;
//     let computerScoreCounter = 0;
//     console.log(playerScoreCounter);

//     if(playerSelection === 'rock' && computerSelection === 'paper') {
//         document.querySelector('.resultsContainer h1').innerText = "You Lose! Paper beats Rock";
//         return "You Lose! Paper beats Rock"
//     }else if(playerSelection === 'rock' && computerSelection === 'scissors') {
//         document.querySelector('.resultsContainer h1').innerText = "You Win! Rock beats Scissors";
//         playerScoreCounter += 1;
//         return "You Win! Rock beats Scissors";
//     }else if(playerSelection === 'paper' && computerSelection === 'scissors') {
//         document.querySelector('.resultsContainer h1').innerText = "You lose! Scissors beats Paper";
//         return "You lose! Scissors beats Paper";
//     }else if(playerSelection === 'paper' && computerSelection === 'rock') {
//         document.querySelector('.resultsContainer h1').innerText = "You win! Paper beats Rock";
//         playerScoreCounter += 1;
//         return "You win! Paper beats Rock";
//     }else if(playerSelection === 'scissors' && computerSelection === 'rock') {
//         document.querySelector('.resultsContainer h1').innerText = 'You lose! Rock beats Scissors';
//         return 'You lose! Rock beats Scissors';
//     }else if(playerSelection === 'scissors' && computerSelection === 'paper') {
//         document.querySelector('.resultsContainer h1').innerText = "You win! Scissors beats Paper";
//         playerScoreCounter += 1;
//         return "You win! Scissors beats Paper";
//     }else if(playerSelection === computerSelection) {
//         document.querySelector('.resultsContainer h1').innerText = "It's a tie";
//         return "It's a tie";
//     }else {
//         document.querySelector('.resultsContainer h1').innerText = "Error";
//         return "Error";
//     }
    
// }



































// function playGame() {

//     for(let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Enter a choice of rock, paper, or scissors to play').toLowerCase();
//         let computerSelection = computerPlay();
//         console.log(playRockPaperScissors(playerSelection, computerSelection));
//     }
// }
