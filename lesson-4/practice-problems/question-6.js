// How does Array.prototype.fill work? Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
/*
The fill method will mutate the array so that it fills every specified index
with the specified value.
Line 3 fills the array with 1's starting at index 1 until index 5 exclusive.

arr > [1, 1, 1, 1, 1]
*/
