let stringyString = prompt('please enter your name: ', 'your name here');

if(stringyString.length>4) {
  alert(`Your name, "${stringyString}", is greater than 4 characters long.`);
  console.log('the name was longer than 4 characters');
}
else {
  alert(`Your name, "${stringyString}", is not greater than 4 characters long.`);
  console.log('the name was not longer than 4 characters');
}