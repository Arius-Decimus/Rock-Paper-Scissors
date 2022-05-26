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
      console.log(result);
    } else if (playerChoice == 'rock' && computerChoice == 'paper' ||
    playerChoice == 'paper' && computerChoice == 'scissors' ||
    playerChoice == 'scissors' && computerChoice == 'rock') {
      result = 'loss';
      console.log(result);
    } else if (playerChoice == 'rock' && computerChoice == 'rock' ||
    playerChoice == 'paper' && computerChoice == 'paper' ||
    playerChoice == 'scissors' && computerChoice == 'scissors') {
      result = 'tie';
      console.log(result);
    }
  }

  function addResult () {
    let text = result;
    resultP1.innerText = result;
    div.append(resultP1);
  }

//4: Events


rockBtn.addEventListener ('click', rpsButton);
paperBtn.addEventListener ('click', rpsButton);
scissorsBtn.addEventListener ('click', rpsButton);
playBtn.addEventListener ('click', rps);