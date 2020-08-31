function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());
/*
The 2 function will not return the same thing because the syntax of the second
function doesn't recognize the object below the return statement returning undefined.
 */
