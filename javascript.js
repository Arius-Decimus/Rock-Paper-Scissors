const rpsArray = ['rock', 'paper', 'scissors'];
let result;
let wins = 0;
let losses = 0;
let compChoice;

function computerPlay () {
  const rng = Math.floor(Math.random() * rpsArray.length);
  compChoice = (rng, rpsArray[rng]);
  compChoiceUpper = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
  compChoice = compChoiceUpper;
  return ('The computer chooses: ' + compChoice);
}



function game () {
  rpsRound
  if (result = 'Player wins') {
    wins++;
  } else if (result = 'Player loses') {
    losses++;
  } else if (result = 'Tie') {
    wins ++;
    losses ++;
  } else {
    return 'Error in game';
  }
  return wins;
  return losses;
}