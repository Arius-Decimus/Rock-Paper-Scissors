const rpsArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay () {
  const rng = Math.floor(Math.random() * rpsArray.length);
  return (rng, rpsArray[rng])
}

function rpsRound () {
  
}