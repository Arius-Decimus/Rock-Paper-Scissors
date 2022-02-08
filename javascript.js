const rpsArray = ['rock', 'paper', 'scissors'];
let result;
let wins = 0;
let losses = 0;
let compChoice;
let playerChoice;
playerChoice = prompt('Rock-Paper-Scissors', 'Rock');

function computerPlay () {
  const rng = Math.floor(Math.random() * rpsArray.length);
  compChoice = (rng, rpsArray[rng]);
  return ('The computer chooses: ' + compChoice);
}

function rpsRound () {
  if (compChoice == 'scissors' && playerChoice == 'rock' ||
  compChoice == 'rock' && playerChoice == 'paper' ||
  compChoice == 'paper' && playerChoice == 'scissors') {
    result = 'You win';
  } else if (compChoice == 'scissors' && playerChoice == 'paper' ||
  compChoice == 'rock' && playerChoice == 'scissors' ||
  compChoice == 'paper' && playerChoice == 'rock') {
    result = 'You lose';
  } else if (compChoice == 'scissors' && playerChoice == 'scissors' ||
  compChoice == 'rock' && playerChoice == 'rock' ||
  compChoice == 'paper' && playerChoice == 'paper') {
    result = 'You tie';
  } else {
    result = 'le error'
  }
  return result
}

switch (x) {
  case ('blah'):
  case ('bleh'):
    console.log(lol)
}


function game () {
  if (result == 'You win') {
    wins++;
  } else if (result = 'You lose') {
    losses++;
  } else if (result = 'You tie') {
    wins ++;
    losses ++;
  } else {
    console.log ('Error in game function');
  }
  return 'Your wins: ' + wins + ' Your losses: ' + losses;
}