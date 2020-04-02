// the theme of my game was "colors"

//declaring a bunch of my variables
let winCount = 0;
let letterBankEn = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let wordBank = ["COLORS", "BLUE", "ORANGE", "LIGHT", "GREEN", "BROWN", "MAROON", "MUTED", 
"COOL", "YELLOW", "RED", "WHITE", "DARK", "BRIGHT", "BLACK", "PURPLE", "WARM", "TAN", 
"GOLDEN", "PINK", "AQUAMARINE"]
let alreadyGuessedArray = [];
let alreadyGuessedDisplay = [];
let gameState = 'PLAYING';
let next = 0;
let guessesRemaining = 12;// an implimented difficulty setting might change this
let currentWord= wordBank[next];
let winCheck = '';
let currentWordArray= currentWord.split('');
let currentWordDisplay = currentWordArray.slice();
for (let i = 0; i<currentWordArray.length; i++){
  currentWordDisplay[i] = '_';
}

/*this function does most of what I want my program to do: check a letter
and update the game display depending on if the guess was good or not.*/
const heavyLiftFunction = function(event) {
  
  //if the player just won or lost, resets with the next word.
  if (gameState != 'PLAYING') {resetGame();}

  //stors the letter of whatever key was pressed and makes it uppercase.
  let tempKey = '';
  tempKey = `${event.key.toUpperCase()}`;
  messageDisplay1.innerText = '';

  //checks to see if the key pressed was a letter.
  if (!letterBankEn.includes(tempKey)){
    console.log('keypress was not a letter.');
  }
  //checks to see if the key pressed was already guessed.
  else if (alreadyGuessedArray.includes(tempKey)){
    console.log('keypress was already guessed.');
    messageDisplay1.innerHTML = `(You already guessed ${tempKey}!)</p><p><br>`;
  }
  /*checks to see if the guess was correct. If it was, it updates the display
   of the current word filling in any matching letters using a 'for' loop. If the 
   guess was not correct, it updates the display of the incorrect guesses, and 
   updates the number of guesses remaining.*/
  else if (currentWordArray.includes(tempKey)){
    for (let i = 0; i<currentWordArray.length; i++){
      if (currentWordArray[i] == tempKey){ currentWordDisplay[i] = tempKey;}
    }
    alreadyGuessedArray.push(tempKey);
    console.log('keypress was a correct guess.');
    messageDisplay2.innerText = `the last letter guessed was ${tempKey}.`;
  }
  else {
    guessesRemaining--;
    alreadyGuessedArray.push(tempKey);
    alreadyGuessedDisplay.push(tempKey);
    console.log('keypress was an incorrect guess.');
    messageDisplay2.innerText = `the last letter guessed was ${tempKey}.`;
  }

  //Displays relevant information about the gamestate to the user
  messageDisplay3.innerText = `Number of Guesses Remaining: ${guessesRemaining}`;
  messageDisplay4.innerText = `Incorrect Guesses: ${alreadyGuessedDisplay}`;
  messageDisplay5.innerText = `Wins: ${winCount}`;
  messageDisplay6.innerText = `your word: ${currentWordDisplay.join(' ')}`;
  
  /*sets the variable 'winCheck' equal to the displayed word as far as the user has
  revealed it, then checks to see if it has been fully revealed (in which case the 
  user has won) or else if the guesses remaining have reached 0 (in which case the 
  user has lost). In either case, it updates 'gameState' to match and displays a 
  message to the user. On the next key press by the user, 'heavyLiftFunction' will
  check the 'gameState' and reset the game.
  NOTE: if neither condition is met, then 'gameState' is not changed and no messages
  will be displayed */
  winCheck = currentWordDisplay.join('');
  if (winCheck === currentWord){
    gameState = 'WON';
    winCount++;
    console.log('they\'ve won the game.');
    messageDisplay7.innerText = 'YOU WIN!!!';
    next++; // sets up the next word in the word bank.
  }
  else if (guessesRemaining === 0){
    gameState = 'LOST'
    console.log('they\'ve lost the game.');
    messageDisplay7.innerText = 'Uh oh, you\'ve lost!';
    next++; // sets up the next word in the word bank.
  }

}

//this function resets the game. It DOES NOT reset the win counter however.
const resetGame = function() {
  
  /*if the user has gotten through the whole wordbank, it displays a message and then
  starts over at the beginning of the list */
  if (next === wordBank.length) {
    next = 0;
    messageDisplay7.innerText = 'looks like you\'ve gone through the whole list! See if you can remember them all!';
  }
  else {messageDisplay7.innerText = '';}

  alreadyGuessedArray = [];
  alreadyGuessedDisplay = [];
  gameState = 'PLAYING';
  guessesRemaining = 12;
  currentWord= wordBank[next];
  winCheck = '';
  currentWordArray= currentWord.split('');
  currentWordDisplay = currentWordArray.slice();
  for (let i = 0; i<currentWordArray.length; i++){currentWordDisplay[i] = '_';}

}

// Uses `document.querySelector()` to obtain a reference to the HTML elements.
let messageDisplay0 = document.querySelector('#display0');
let messageDisplay1 = document.querySelector('#display1');
let messageDisplay2 = document.querySelector('#display2');
let messageDisplay3 = document.querySelector('#display3');
let messageDisplay4 = document.querySelector('#display4');
let messageDisplay5 = document.querySelector('#display5');
let messageDisplay6 = document.querySelector('#display6');
let messageDisplay7 = document.querySelector('#display7');

// An event listener that triggers `heavyLiftFunction` when a key is pressed.
document.addEventListener('keyup', heavyLiftFunction);