//declaring a bunch of my variables
let winCount = 0;
let counter = 0; //i'll probably take this out later
let letterBankEn = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let alreadyGuessedArray = [];
let alreadyGuessedDisplay = [];
let gameState = 'PLAYING';
let guessesRemaining = 9;// if implimented a dificulty setting, this might be smaller
let CurrentWord= 'STARTED';// need to make this change every new game somehow
let CurrentWordArray= CurrentWord.split('');

/*this function does most (or all?) of what I want my program to do: check a letter
and update the gamestate to match if it was a good guess or not.*/
const heavyLiftFunction = function(event) {
  
  let tempKey = '';
  tempKey = `${event.key.toUpperCase()}`;
  counter++; // i'll probably end up removing this later
  messageDisplay1.innerText = `you have input ${counter} letters.`; // take this out later
  messageDisplay2.innerText = `the last letter guessed was ${tempKey}.`;
  if (!letterBankEn.includes(tempKey)){
    console.log('keypress was not a letter.');
  }
  else if (alreadyGuessedArray.includes(tempKey)){
    console.log('keypress was already guessed.');
  }
  else if (CurrentWordArray.includes(tempKey)){
    //modify wordDisplay to user to include tempKey everywhere it occurs
    alreadyGuessedArray.push(tempKey);
   // if alreadyGA is filled with objects-" letter: 'A' color: 'green' " for example
   // how would I add a new object with letter: ${tempKey} and color 'green' or 'red'?
   console.log('keypress was a correct guess.');
  }
  else {
    guessesRemaining--;
    alreadyGuessedArray.push(tempKey);
    // here i'd wan't it to be red if i figure out the object thing.
    // alternitavely i can have a "hidden" array that the user doesn't see and an
    // almost matching array that only gets updated on fails that is used to show the user
    console.log('keypress was an incorrect guess.');
  }
  messageDisplay3.innerText = `Number of Guesses Remaining: ${guessesRemaining}`;
  messageDisplay4.innerText = `Letters you've gessed so far are: ${alreadyGuessedArray}`;
  messageDisplay5.innerText = `Wins: ${winCount}.`;

/*
  if (wordDisplay === secretWord){
    gameState = 'WON';
    winCount++;
    console.log('they\'ve won the game.');
  }
  else if (guessesRemaining === 0){
    gameState = 'LOST'
    console.log('they\'ve lost the game.');
  }

  if (gameState === 'WON'){
    //display some kind of messege
    //reset the game on next keypress? after 5 seconds? idk
  }
  else if (gameState === 'LOST'){
    //display smoe kind of messege
    //reset the game on next keypress? after 5 seconds? idk
  }
*/
}

const resetGame = function() {
  alreadyGuessedArray = [];
  alreadyGuessedDisplay = [];
  gameState = 'PLAYING';
  guessesRemaining = 9;
  //actually chooses and displays a new word?
}

// Uses `document.querySelector()` to obtain a reference to the HTML elements.
let targetArea = document.querySelector('#gameName');
let messageDisplay1 = document.querySelector('#display1');
let messageDisplay2 = document.querySelector('#display2');
let messageDisplay3 = document.querySelector('#display3');
let messageDisplay4 = document.querySelector('#display4');
let messageDisplay5 = document.querySelector('#display5');

// An event listener that triggers `heavyLiftFunction` when a key is pressed.
document.addEventListener('keyup', heavyLiftFunction);
