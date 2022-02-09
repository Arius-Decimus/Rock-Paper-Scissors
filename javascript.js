let wins = 0;
let losses = 0;
let i = 0;

while (wins < 5 || losses < 5 || i < 10) {

  const rpsArray = ['rock', 'paper', 'scissors'];
  let result;
  let compChoice;
  let playerChoiceRaw;
  let playerChoice;
  let rng = Math.floor(Math.random() * rpsArray.length)
  playerChoiceRaw = prompt('Rock-Paper-Scissors', 'Rock');
  playerChoice = playerChoiceRaw.toLowerCase();
  compChoice = (rng, rpsArray[rng]);

  if (compChoice == 'scissors' && playerChoice == 'rock' ||
  compChoice == 'rock' && playerChoice == 'paper' ||
  compChoice == 'paper' && playerChoice == 'scissors') {
    result = 'You win';
    wins++;
    i++;
    compChoice = (rng, rpsArray[rng])
  } else if (compChoice == 'scissors' && playerChoice == 'paper' ||
  compChoice == 'rock' && playerChoice == 'scissors' ||
  compChoice == 'paper' && playerChoice == 'rock') {
    result = 'You lose';
    losses++;
    i++;
    compChoice = (rng, rpsArray[rng])
  } else if (compChoice == 'scissors' && playerChoice == 'scissors' ||
  compChoice == 'rock' && playerChoice == 'rock' ||
  compChoice == 'paper' && playerChoice == 'paper') {
    result = 'You tie';
    wins++;
    losses++;
    i++;
    compChoice = (rng, rpsArray[rng])
  } else {
    result = 'le error';
    i++;
    compChoice = (rng, rpsArray[rng])
  }

  console.log('Computer chose: ' + compChoice + '. Player chose: ' + 
  playerChoice + '. ' + result + '. ' + 'Your wins: ' + wins + 
  ' Your losses: ' + losses);

  if (wins == 5 ) {
    let finalOutcome = 'You win! Good day sir!';
    console.log(finalOutcome);
    break;
  } else if (losses == 5) {
    let finalOutcome = 'You lose! Good day sir!';
    console.log(finalOutcome);
    break;
  } else if (wins == 5 && losses == 5) {
    finalOutcome = 'You tie! Good day sir!';
    console.log(finalOutcome);
    break;
  } else if (i == 10) {
  let finalOutcome = 'Exceeded maximum number of attempts! Good day sir!';
    console.log (finalOutcome);
    break;
}
}