let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

function isIncluded(numb, array) {
  return array.includes(numb);
}

console.log(isIncluded(7, numbers));
console.log(isIncluded(3, numbers));
