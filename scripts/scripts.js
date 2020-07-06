let computerSelection;
let playerSelection;
let result;
let endResult;
let computerScore = 0;
let playerScore = 0;
let gameCount = 0;
let winner;

const playerScoreDisplay = document.querySelector('.player-score');
playerScoreDisplay.textContent = "Player Score: " + playerScore;

const computerScoreDisplay = document.querySelector('.computer-score');
computerScoreDisplay.textContent = "Computer Score: " + computerScore;

const buttons = document.querySelectorAll('button');

const restartButton = document.querySelector('button.restart');
restartButton.addEventListener('click', restart);

function playGame (button) {
    playerSelection = this.className;
    console.log(playerSelection);

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    computerPlay();
    rockPaperScissors(playerSelection, computerSelection);

    const playerSelectionDisplay = document.querySelector('.player-selection');
    playerSelectionDisplay.textContent = 'You choose "' + playerSelection + '"';

    const computerSelectionDisplay = document.querySelector('.computer-selection');
    computerSelectionDisplay.textContent = 'Computer chooses "' + computerSelection + '"';

    const matchResult = document.querySelector('.match-result');
    matchResult.textContent = result;

    playerScoreDisplay.textContent = "Player Score: " + playerScore;

    computerScoreDisplay.textContent = "Computer Score: " + computerScore;

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            winner = 'You are a winner.'
        } else if (computerScore > playerScore) {
            winner = 'You are a loser.'
        };

        const resultContainer = document.querySelector('#result-container');

        const endResult = document.createElement('div');
        endResult.classList.add('.end-result');
        endResult.textContent = 'Game Over. ' + winner;

        resultContainer.appendChild(endResult)

        buttons.forEach((button) => button.classList.add('hide'));
        restartButton.classList.remove('hide');
    };
}

buttons.forEach((button) => {
    button.addEventListener('click', playGame);
});
    
function restart() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;

    buttons.forEach((button) => button.classList.remove('hide'));
    restartButton.classList.add('hide');
};

// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerSelection = "Rock";
    } else if (randomNumber == 1) {
        computerSelection = "Paper";
    } else if (randomNumber == 2) {
        computerSelection = "Scissors";
    }
        return computerSelection;
    }

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function rockPaperScissors(playerSelection, computerSelection) {

    if (playerSelection == "Rock") {
        switch (computerSelection) {
            case "Rock":
                result = "It's a tie. Try again."            
                break;
            case "Paper":
                result = "Paper beats rock. You lose.";
                computerScore++;
                break;
            case "Scissors":
                result = "Rock beats scissors. You win.";
                playerScore++;
                break;
            default:
                result = "I don't know how you got here. Try again.";
        }
    } else if (playerSelection == "Paper") {
        switch (computerSelection) {
            case "Rock":
                result = "Paper beats Rock. You win."
                playerScore++;
                break;
            case "Paper":
                result = "It's a tie. Try again.";
                break;
            case "Scissors":
                result = "Scissors beats paper. You lose";
                computerScore++;
                break;
            default:
                result = "I don't know how you got here. Try again.";
        }
    } else if (playerSelection == "Scissors") {
        switch (computerSelection) {
            case "Rock":
                result = "Rock beats scissors. You lose."
                computerScore++;
                break;
            case "Paper":
                result = "Scissors beats paper. You win.";
                playerScore++;
                break;
            case "Scissors":
                result = "It's a tie. Try again.";
                break;
            default:
                result = "I don't know how you got here. Try again.";
        }
    }
    return result;
}  