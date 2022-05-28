
//Function to randomly generate computer selection
function computerPlay() {
    let randomNum = Math.ceil(Math.random() * 3);
    if(randomNum < 2) {
        return 'rock';
    }else if(randomNum < 3) {
        return 'paper';
    }else {
        return 'scissors';
    }
}


//Function to generate whether you win or lose and print out the corresponding string
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    
    if((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        document.querySelector('.playResult').innerText = `You Lose! Computer chose ${computerSelection} which beats ${playerSelection}`;
        return `You Lose! You chose ${playerSelection} which loses to ${computerSelection}`;
    }else if((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        document.querySelector('.playResult').innerText = `You Win! You chose ${playerSelection} which beats ${computerSelection}`;
        return `You Win! You chose ${playerSelection} which beats ${computerSelection}`;
    }else if(playerSelection === computerSelection) {
        document.querySelector('.playResult').innerText = 'It\'s a tie';
        return 'It\'s a tie';
    }else {
        return 'eRrOr';
    }
}


let buttons = document.querySelectorAll('.btn');
buttons.forEach(el => el.addEventListener('click', playOnClick));


//Function to assign values to playerSelection through button click, computer selection through computerPlay() and to play the game using those values using playround()
function playOnClick(event) {
    let playerSelection = event.target.value;
    console.log(playerSelection);
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}





















// function game() {
    
//     for(let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Enter rock, paper, or scissors');
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }