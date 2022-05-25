/*
Pseudo-Code RPS 2.0 best of 5

Create a function called Rock Paper Scissors.

For as long as player has not won 3 games, lost 3 games, or played more than 5 games

*/



//1: Storage (array, definitions, input conversion)

  let rpsArray = ["rock", "paper", "scissors"];
  let wins = 0;
  let losses = 0;
  let play = 0

/*
2: Computer Chooses!
  let rng = rpsArray[Math.floor(Math.random() * rpsArray.length)];
  let computerChoice = rng;
  console.log(computerChoice);
*/

//3: The Function

function rpsGame (){
  if (play == 0) {
    let result = 0;

    for (i = 0; wins < 5 && losses < 5 && i < 10; i++) {
      let rng = rpsArray[Math.floor(Math.random() * rpsArray.length)];
      let computerChoice = rng;
      let playerChoiceRaw = prompt('Rock-Paper-Scissors', 'Rock');
      let playerChoice = playerChoiceRaw.toLowerCase();

      if (playerChoice == 'rock' && computerChoice == 'scissors' ||
      playerChoice == 'paper' && computerChoice == 'rock' ||
      playerChoice == 'scissors' && computerChoice == 'paper') {
        wins++;
        console.log('Player wins! Total score is now: ' + wins + ' ' + losses);
      } else if (playerChoice == 'rock' && computerChoice == 'paper' ||
      playerChoice == 'paper' && computerChoice == 'scissors' ||
      playerChoice == 'scissors' && computerChoice == 'rock') {
        losses++;
        console.log('Player loses! Total score is now: ' + wins + ' ' + losses);
      } else if (playerChoice == 'rock' && computerChoice == 'rock' ||
      playerChoice == 'paper' && computerChoice == 'paper' ||
      playerChoice == 'scissors' && computerChoice == 'scissors') {
        wins++;
        losses++;
        console.log('Twas a tie, you fool! Total score is now: ' + wins + ' ' + losses);
      }

      if (wins == 5 && losses !== 5) {
        result = 'You win!';
      } else if (losses == 5 && wins !== 5) {
        result = 'You lose!';
      } else if (wins == 5 && losses == 5) {
        result = 'You tie!';
      } else if (i = 10 && wins !== 5 && losses !== 5) {
        result = 'wut';
      }

      if (i == 10 || wins == 5 || losses == 5) {
        play = 1;
        return(result);
      }
  }
  }
}
