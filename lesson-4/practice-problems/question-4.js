// What is the return value of the following statement? Why?
console.log(['ant', 'bear', 'caterpillar'].pop().length);

/*
It should log 3 because pop removes and returns the first element in the array.
Then you are accessing the length property of "ant"

NOPE WAS WRONG

pop() removes and returns the LAST element of the array "caterpillar" which is
11 characters long. So it returns 11.
*/
