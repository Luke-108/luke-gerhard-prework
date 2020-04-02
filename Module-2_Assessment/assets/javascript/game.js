//declaring a bunch of my variables
let winCount = 0;
let counter = 0; //i'll probably take this out later
let letterBankEn = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let alreadyGuessedArray = [];
let alreadyGuessedDisplay = [];
let gameState = 'PLAYING';
let guessesRemaining = 12;// if implimented a dificulty setting, this might be smaller
let currentWord= 'STARTED';// need to make this change every new game somehow
let winCheck = '';
let currentWordArray= currentWord.split('');
let currentWordDisplay = currentWordArray.slice();
for (let i = 0; i<currentWordArray.length; i++){
  currentWordDisplay[i] = '_';
}

/*this function does most (or all?) of what I want my program to do: check a letter
and update the gamestate to match if it was a good guess or not.*/
const heavyLiftFunction = function(event) {
  
  if (gameState != 'PLAYING') {resetGame();}

  let tempKey = '';
  tempKey = `${event.key.toUpperCase()}`;
  counter++; // i'll probably end up removing this later
  messageDisplay1.innerText = `you have input ${counter} letters.`; // take this out later
  messageDisplay2.innerText = `the last letter guessed was ${tempKey}.`; // remove later
  if (!letterBankEn.includes(tempKey)){
    console.log('keypress was not a letter.');
  }
  else if (alreadyGuessedArray.includes(tempKey)){
    console.log('keypress was already guessed.');
  }
  else if (currentWordArray.includes(tempKey)){
    //modify wordDisplay to user to include tempKey everywhere it occurs
    for (let i = 0; i<currentWordArray.length; i++){
      if (currentWordArray[i] == tempKey){ currentWordDisplay[i] = tempKey;}
    }
    alreadyGuessedArray.push(tempKey);
    // if alreadyGA is filled with objects-" letter: 'A' color: 'green' " for example
    // how would I add a new object with letter: ${tempKey} and color 'green' or 'red'?
    console.log('keypress was a correct guess.');
  }
  else {
    guessesRemaining--;
    alreadyGuessedArray.push(tempKey);
    alreadyGuessedDisplay.push(tempKey);
    // here i'd wan't it to be red if i figure out the object thing.
    // alternitavely i can have a "hidden" array that the user doesn't see and an
    // almost matching array that only gets updated on fails that is used to show the user
    console.log('keypress was an incorrect guess.');
  }
  messageDisplay3.innerText = `Number of Guesses Remaining: ${guessesRemaining}`;
  messageDisplay4.innerText = `Incorrect Guesses: ${alreadyGuessedDisplay}`;
  messageDisplay5.innerText = `Wins: ${winCount}.`;
  messageDisplay6.innerText = `your word: ${currentWordDisplay.join(' ')}`;
  
  winCheck = currentWordDisplay.join('');

  if (winCheck === currentWord){
    gameState = 'WON';
    winCount++;
    console.log('they\'ve won the game.');
    messageDisplay7.innerText = 'YOU WIN!!!';
  }
  else if (guessesRemaining === 0){
    gameState = 'LOST'
    console.log('they\'ve lost the game.');
    messageDisplay7.innerText = 'uh oh, you\'ve lost!';
  }

}

const resetGame = function() {
  alreadyGuessedArray = [];
  alreadyGuessedDisplay = [];
  gameState = 'PLAYING';
  guessesRemaining = 12;
  currentWord= 'STARTED';
  winCheck = '';
  currentWordArray= currentWord.split('');
  currentWordDisplay = currentWordArray.slice();
  for (let i = 0; i<currentWordArray.length; i++){currentWordDisplay[i] = '_';}
  messageDisplay7.innerText = '';
  //actually chooses and displays a new word?
}

// Uses `document.querySelector()` to obtain a reference to the HTML elements.
let targetArea = document.querySelector('#gameName');
let messageDisplay1 = document.querySelector('#display1');
let messageDisplay2 = document.querySelector('#display2');
let messageDisplay3 = document.querySelector('#display3');
let messageDisplay4 = document.querySelector('#display4');
let messageDisplay5 = document.querySelector('#display5');
let messageDisplay6 = document.querySelector('#display6');
let messageDisplay7 = document.querySelector('#display7');

// An event listener that triggers `heavyLiftFunction` when a key is pressed.
document.addEventListener('keyup', heavyLiftFunction);
