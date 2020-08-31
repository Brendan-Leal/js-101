let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); /* Output is 34 because numbers is a primitive data type
that cannot be mutated. It is passed by value into the messWithIt function. The
function has no effect on the answer variable.
*/
