let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((arrayA, arrayB) => {
  let a = arrayA.filter(number => number % 2 !== 0).reduce((curr, next) => curr + next);
  console.log(a);
  let b = arrayB.filter(number => number % 2 !== 0).reduce((curr, next) => curr + next);
  console.log(b);

  return a - b;
});

console.log(arr);
