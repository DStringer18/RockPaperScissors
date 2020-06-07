let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let humanIsWinner

const compareChoices = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice) {
    return "tie game!"
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            humanIsWinner === false;
            computerScore++;
            return "paper covers rock. You lose :("
        } else if (computerChoice == "scissors") {
            humanIsWinner === true;
            humanScore++;
            return "rock crushes scissors! You win :)"
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanIsWinner === true;
            humanScore++;
            return "paper covers rock! You win :)"
        } else if (computerChoice == "scissors") {
            humanIsWinner === false;
            computerScore++;
            return "scissors cut paper. You lose :("
        } 
    } else {
        if (computerChoice == "rock") {
            humanIsWinner === false;
            computerScore++;
            return "rock crushes scissors. You lose :("
        } else if (computerChoice == "paper") {
            humanIsWinner === true;
            humanScore++;
            return "scissors cut paper! You win :)"
        }
    }
}

/*const updateScore = () => {
    if (compareChoices(humanChoice, computerChoice).includes('win')) {
        humanScore++;
    } else {
        computerScore++;
    }
}*/

const advanceRound = () => currentRoundNumber++;
