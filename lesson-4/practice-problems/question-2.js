// What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

/*
this shoule return a new array where each element is the square of the original
element. [1, 4, 9]

NOPE I WAS WRONG

It is missing the return statement. As a resule map is returning undefined each
iteration.


*/
// Revised version
let example = [1, 2, 3].map(num => {
  return num * num;
});

console.log(example);
