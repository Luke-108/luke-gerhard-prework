let nameList = ['Bob', 'Mary', 'Joe'];
console.log(`the initial list is: [${nameList[0]}, ${nameList[1]}, ${nameList[2]}].`);

for(let i = 0; i<3; i++) {
  let newName = prompt("please add another student's name: ");
  nameList.push(newName);
}

console.log('the elements of the array are now the following:');

for(let i = 0; i<nameList.length; i++) {
  console.log(nameList[i]);
}