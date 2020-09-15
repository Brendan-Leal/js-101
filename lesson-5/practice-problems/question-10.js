let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let serializedArr = JSON.stringify(arr);
let arrCopy = JSON.parse(serializedArr);

arrCopy.forEach((array) => {
  if (array.every(element => typeof element === "string")) {
    array.sort((a, b) => b.charCodeAt() - a.charCodeAt());
  } else {
    array.sort((a, b) => Number(b) - Number(a));
  }
});

console.log(arr);
console.log(arrCopy);
