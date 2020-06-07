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
            return "paper covers rock. You lose :("
        } else if (computerChoice == "scissors") {
            humanIsWinner === true;
            return "rock crushes scissors! You win :)"
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanIsWinner === true;
            return "paper covers rock! You win :)"
        } else if (computerChoice == "scissors") {
            humanIsWinner === false;
            return "scissors cut paper. You lose :("
        } 
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            humanIsWinner === false;
            return "rock crushes scissors. You lose :("
        } else if (computerChoice == "paper") {
            humanIsWinner === true;
            return "scissors cut paper! You win :)"
        } else {return "something went wrong -___-"}
    } 
    if (humanIsWinner === true) {
        humanScore++;
      } else if (humanIsWinner === false) {
        computerScore++;
      }
};



const advanceRound = () => currentRoundNumber++;
