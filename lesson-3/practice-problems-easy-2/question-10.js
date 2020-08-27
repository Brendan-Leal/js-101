let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);

/*
1) statement1.split('') will split the string up by each character and return an
array of characters.

2) .filter(char => char === 't') will return a new array comprised of all the
elements that satisfy the conditional statment in the callback function.
essentially returning an array of "t" characters.

3) .length will return the length of the array. Which is the same as the number
of "t" character in the string.
*/
