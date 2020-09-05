// What is the return value of the filter method call below? Why?
console.log([1, 2, 3].filter(num => 'hi'));

/*
This should retrun a new array [1, 2, 3] because filter will retrun a new array
comprised of all the elements that have returned a truthy value. 'hi' is always
a truthy value.
*/
