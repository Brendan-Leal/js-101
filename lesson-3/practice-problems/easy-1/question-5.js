// This will log true b/c it uses the non-strict equality operator. It coerces
// the string into a boolean value or number 0.
console.log(false == '0'); // true

// This will log false because it uses strict equlaity operator. It will NOT
// coerce the string '0' to a boolean value or Number. Thus comparing a string
// with a bool.
console.log(false === '0'); // false
