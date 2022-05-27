function computerPlay() {
    let randomNum = Math.ceil(Math.random() * 3);
    if(randomNum < 2) {
        return 'rock'
    }else if(randomNum < 3) {
        return 'paper'
    }else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    
    if((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        return `You Lose! Computer chose ${computerSelection} which beats ${playerSelection}`;
    }else if((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return `You Win! You chose ${playerSelection} which beats ${computerSelection}`;
    }else if(playerSelection === computerSelection) {
        return 'It\'s a tie'
    }else {
        return 'eRrOr'
    }
}

// function game() {
    
//     for(let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Enter rock, paper, or scissors');
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }