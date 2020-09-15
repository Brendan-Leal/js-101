let arr = [
  ['a', 1],
  ['b', 'two'],
  ['sea', {'c': 3}],
  ['D', ['a', 'b', 'c']]
];
let obj = {};

arr.forEach((array) => {
  obj[array[0]] = array[1];
});

console.log(obj);
