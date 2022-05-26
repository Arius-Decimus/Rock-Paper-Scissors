//1: Storage (array, definitions, input conversion)

let rpsArray = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;
let play = 0;
let playerChoice;
let result;
const body = document.body;
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playBtn = document.querySelector('#play');
const resultsDiv = document.createElement('div');
resultsDiv.setAttribute('id','results')
body.append(resultsDiv);
resultP1 = document.createElement('p'); 

const div = document.querySelector('div');

function rps () {
  playRound();
  addResult();
}

function rpsButton () {
  playerChoice = this.id;
  console.log(playerChoice);
}

function playRound () {
  let rng = rpsArray[Math.floor(Math.random() * rpsArray.length)];
  let computerChoice = rng;
  console.log('Computer Chose: ' + computerChoice);
  console.log('Player Chose: ' + playerChoice);
  if (playerChoice == 'rock' && computerChoice == 'scissors' ||
    playerChoice == 'paper' && computerChoice == 'rock' ||
    playerChoice == 'scissors' && computerChoice == 'paper') {
      result = 'win';
      wins++;
      console.log(result);
    } else if (playerChoice == 'rock' && computerChoice == 'paper' ||
    playerChoice == 'paper' && computerChoice == 'scissors' ||
    playerChoice == 'scissors' && computerChoice == 'rock') {
      result = 'loss';
      console.log(result);
      losses ++;
    } else if (playerChoice == 'rock' && computerChoice == 'rock' ||
    playerChoice == 'paper' && computerChoice == 'paper' ||
    playerChoice == 'scissors' && computerChoice == 'scissors') {
      result = 'tie';
      wins++;
      losses++;
      console.log(result);
    }
  }

  function addResult () {
    if (wins < 5 && losses < 5) {
    resultP1.innerText = result + ' ' + wins + ' ' + losses;
    div.append(resultP1);
    } else if (wins == 5) {
      resultP1.innerText = 'You win, congratulations!';
      wins = 0;
      losses = 0;
      div.append(resultP1);
    } else if (losses == 5) {
      resultP1.innerText = 'You lose, loser!';
      div.append(resultP1);
    } else if (wins == 5 && losses ==5) {
      resultP1.innerText = 'you tie, tier! ):';
      div.append(resultP1);
    }
  }

//4: Events


rockBtn.addEventListener ('click', rpsButton);
paperBtn.addEventListener ('click', rpsButton);
scissorsBtn.addEventListener ('click', rpsButton);
playBtn.addEventListener ('click', rps);