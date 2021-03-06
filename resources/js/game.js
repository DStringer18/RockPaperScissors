let humanChoice

const roundNumberDisplay = document.getElementById('round-number');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultsDisplay = document.getElementById('results');
const rockButton = document.getElementById('h_rock');
const paperButton = document.getElementById('h_paper');
const scissorsButton = document.getElementById('h_scissors');
const playButton = document.getElementById('play');
const nextRoundButton = document.getElementById('next-round');
const computerWins = document.getElementById('computer-wins');
const hChoices = document.querySelectorAll('button.choice');

rockButton.addEventListener('click', () => {
    humanChoice = "rock";
});
paperButton.addEventListener('click', () => {
    humanChoice = "paper";
});
scissorsButton.addEventListener('click', () => {
    humanChoice = "scissors";
});

let changeColor = (id) => {
  document.getElementById(id).style.backgroundColor = blue;
}

playButton.addEventListener('click', () => {
    // Make a random 'computer choice' and display:
    let computerChoice
    let computerChoiceVar = Math.random();
    if (computerChoiceVar <= 1/3) {
        computerChoice = "rock"
        document.getElementById('c_default').style.display = "none"
        document.getElementById('c_rock').style.display = "block"
      } else if (computerChoiceVar < 2/3) {
        computerChoice = "scissors"
        document.getElementById('c_default').style.display = "none"
        document.getElementById('c_scissors').style.display = "block"
      } else {
        computerChoice = "paper"
        document.getElementById('c_default').style.display = "none"
        document.getElementById('c_paper').style.display = "block"
      };
    
    // Compare the choices, choose winner, update score.
    compareChoices(humanChoice, computerChoice)
    let winningText = compareChoices(humanChoice, computerChoice);
    resultsDisplay.innerText = winningText;
    updateScore();

    // Display the current scores:
    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;

    // Display the winner:
    if (compareChoices(humanChoice, computerChoice) === "tie game!") {
      computerWins.innerText = "";
      playButton.innerText = ""
    } else if (humanIsWinner === 2) {
    playButton.innerText = 'You Win!!!!!';
    playButton.classList.toggle('winning-text')
    } else if (humanIsWinner === 1) {
    computerWins.innerText = 'Computer Wins!!!';
  };

    //Disable buttons:
    playButton.setAttribute('disabled', true);
    //hChoices.setAttribute('disabled', true);
    nextRoundButton.removeAttribute('disabled');
});

  

nextRoundButton.addEventListener('click', () => {
    // Increase the round number
    advanceRound();

    // Display the new round number
    roundNumberDisplay.innerText = currentRoundNumber;
  
    // Set the correct disabled state for the buttons
    nextRoundButton.setAttribute('disabled', true);
    playButton.removeAttribute('disabled');

    // Reset the winner label display
    playButton.innerText = 'Play!';
    computerWins.innerText = '';

    //Reset the button displays
    document.getElementById('c_rock').style.display = "none";
    document.getElementById('c_paper').style.display = "none";
    document.getElementById('c_scissors').style.display = "none";
    document.getElementById('c_default').style.display = "block";

});