// What is the return value of map in this case? Why?
[1, 2, 3].map(num => num * num);
/*
Since this is a single line statement without curly braces it will square each
number in the array map is called on and return a new array with the values
[1, 4, 9]
*/
