let humanChoice

const roundNumberDisplay = document.getElementById('round-number');

const computerChoiceDisplay = document.getElementById('computer-choice');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');

const computerWinsDisplay = document.getElementById('computer-wins');

const rockButton = document.getElementById('h_rock')
const paperButton = document.getElementById('h_paper')
const scissorsButton = document.getElementById('h_scissors')

const playButton = document.getElementById('play');
const nextRoundButton = document.getElementById('next-round');

rockButton.addEventListener('click', () => {
    humanChoice = "rock"
})
paperButton.addEventListener('click', () => {
    humanChoice = "paper"
})
scissorsButton.addEventListener('click', () => {
    humanChoice = "scissors"
})



playButton.addEventListener('click', () => {
    // Make a random 'computer choice' and display
    const computerChoice = Math.random();
    if (computerChoice <= 1/3) {
        computerChoice = "rock";
        document.getElementById('c_default').style.display = "none"
        document.getElementById('c_rock').style.display = "block"
      } else if (computer < 2/3) {
        computerChoice = "scissors";
        document.getElementById('c_default').style.display = "none"
        document.getElementById('c_scissors').style.display = "block"
      } else {
        computerChoice = "paper";
        document.getElementById('c_default').style.display = "none"
        document.getElementById('c_paper').style.display = "block"
      }
    // Compare Choices
    compareChoices(humanChoice, computerChoice);
    

})

nextRoundButton.addEventListener('click', () => {
    // Increase the round number
    advanceRound();
    // Display the new round number
    roundNumberDisplay.innerText = currentRoundNumber;
  
    // Set the correct disabled state for the buttons
    nextRoundButton.setAttribute('disabled', true);
    guessButton.removeAttribute('disabled');

    //Reset the button displays
    document.getElementById('c_rock').style.display = "none";
    document.getElementById('c_paper').style.display = "none";
    document.getElementById('c_scissors').style.display = "none";
    document.getElementById('c_default').style.display = "block"