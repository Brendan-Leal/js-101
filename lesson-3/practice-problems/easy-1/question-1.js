let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(numbers);

/* No error occures because when you try to acces and assign a value to an index
outside of an array's current legnth it will automatically expand to accommodate
that index value. As a result those indecies are empty
*/
// =============================================================================

// Bonus question
let num = [1, 2, 3];
num[6] = 5;
num[4];

console.log(typeof num[4]);

/* num[4] has no value at that index. If you try and access it, it will return
undefined. Empty items in an array have no meaning to the array other than being
wasted space.
*/
