let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArray = arr.map(obj => {
  let newObject = {};

  for (const prop in obj) {
    newObject[prop] = obj[prop] + 1;
  }
  return newObject;

});
console.log(newArray);
