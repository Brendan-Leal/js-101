let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Since slice doesn't mutate the original array it copies the values of numbers
// into reverseArr
let reverseArr = numbers.slice().reverse();

console.log(reverseArr);

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);

console.log(sortedArray);
