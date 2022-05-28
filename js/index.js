
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
        computerScore++;
    }else if((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        document.querySelector('.playResult').innerText = `You Win! You chose ${playerSelection} which beats ${computerSelection}`;
        playerScore++;
    }else if(playerSelection === computerSelection) {
        document.querySelector('.playResult').innerText = 'It\'s a tie';
    }else {
        document.querySelector('.playResult').innerText = 'eRrOr';
    }
    document.querySelector('.playerScore p').innerText = playerScore;
    document.querySelector('.computerScore p').innerText = computerScore;

    if(playerScore === 5) {
        document.querySelector('.playResult').innerText = 'You win!';
        return 'You win!';
    }else if(computerScore === 5) {
        document.querySelector('.playResult').innerText = 'Computer wins!';
        return 'Computer wins!';
    }
}


let buttons = document.querySelectorAll('.btn');
buttons.forEach(el => el.addEventListener('click', playOnClick));


//Function to assign values to playerSelection through button click, computer selection through computerPlay() and to play the game using those values using playround()
function playOnClick(event) {
    let playerSelection = event.target.value;
    let computerSelection = computerPlay();
    
    if(playerSelection === 'rock') {
        document.querySelector('.playerSelectionImage').src = 'images/rock.png';
        document.querySelector('.playerSelectionImage').style.visibility = 'visible';
    }else if(playerSelection === 'paper') {
        document.querySelector('.playerSelectionImage').src = 'images/paper.png';
        document.querySelector('.playerSelectionImage').style.visibility = 'visible';
    }else if(playerSelection === 'scissors') {
        document.querySelector('.playerSelectionImage').src = 'images/scissors.png'; 
        document.querySelector('.playerSelectionImage').style.visibility = 'visible';
    }

    if(computerSelection === 'rock') {
        document.querySelector('.computerSelectionImage').src = 'images/rock.png';
        document.querySelector('.computerSelectionImage').style.visibility = 'visible';
    }else if(computerSelection === 'paper') {
        document.querySelector('.computerSelectionImage').src = 'images/paper.png';
        document.querySelector('.computerSelectionImage').style.visibility = 'visible';
    }else if(computerSelection === 'scissors') {
        document.querySelector('.computerSelectionImage').src = 'images/scissors.png'; 
        document.querySelector('.computerSelectionImage').style.visibility = 'visible';
    }

    playRound(playerSelection, computerSelection);
}

//Player Score Counter
let playerScore = 0;
let computerScore = 0;






















// function game() {
    
//     for(let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Enter rock, paper, or scissors');
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }