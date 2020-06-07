let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let humanIsWinner

const compareChoices = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice) {
    return "tie game!"
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            return "paper suffocates rock. You lose :("
            computerScore++
            humanIsWinner == false
        } else if (computerChoice == "scissors") {
            return "rock crushes scissors! You win :)"
            humanScore++
            humanIsWinner == true
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            return "paper suffocates rock! You win :)"
            humanScore++
            humanIsWinner == true
        } else if (computerChoice == "scissors") {
            return "scissors cut paper. You lose :("
            computerScore++
            humanIsWinner ==false
        } 
    } else {
        if (computerChoice == "rock") {
            return "rock crushes scissors. You lose :("
            computerScore++
            humanIsWinner = false
        } else if (computerChoice == "paper") {
            return "scissors cut paper! You win :)"
            humanScore++
            humanIsWinner = true
        }
    }
}

const advanceRound = () => currentRoundNumber++;
