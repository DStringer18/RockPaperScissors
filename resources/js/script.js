let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let humanIsWinner;
const compareChoices = (humanChoice, computerChoice) => {

    if (humanChoice === computerChoice) {
    humanIsWinner = 0;
    return "tie game!"
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            humanIsWinner = 1;
            return "paper covers rock. You lose :("
        } else if (computerChoice === "scissors") {
            humanIsWinner = 2;
            return "rock crushes scissors! You win :)"
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanIsWinner = 2;
            return "paper covers rock! You win :)"
        } else if (computerChoice === "scissors") {
            humanIsWinner = 1;
            return "scissors cut paper. You lose :("
        } 
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            humanIsWinner = 1;
            return "rock crushes scissors. You lose :("
        } else if (computerChoice === "paper") {
            humanIsWinner = 2;
            return "scissors cut paper! You win :)"
        } else {return "something went wrong -___-"}
    }
};

const updateScore = () => {
    if (humanIsWinner === 2) {
        humanScore++;
        } else if (humanIsWinner === 1) {
        computerScore++;
        } else if (humanIsWinner === 0) {
        console.log("its a tie");
        }
};



const advanceRound = () => currentRoundNumber++;