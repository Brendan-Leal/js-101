// What is the callback's return value in the following code?
// Also, what is the return value of every() in this code?

console.log([1, 2, 3].every(num => {
  return num = num * 2;
}));

/*
The callbacks return values are 2, 4, 6. The return value of every() is true
because num * 2 is alsways a truthy value.
*/
