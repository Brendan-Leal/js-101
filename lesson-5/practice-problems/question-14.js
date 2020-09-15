let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arrayOfObjects = Object.values(obj);
let storedValues = [];

arrayOfObjects.forEach((obj) => {
  if (isFruit(obj)) {
    // console.log(obj.colors);
    // storedValues.push(capitalizedColors())
    storedValues.push(capitalizedColors(obj.colors));
  } else {
    // console.log(obj.size);
    storedValues.push(upperCaseVeggies(obj.size));
  }
});

console.log(storedValues);

function upperCaseVeggies(str) {
  return str.toUpperCase();
}

function isFruit(obj) {
  return obj.type === "fruit";
}

function capitalizedColors(arr) {
  let formatedColors = [];
  arr.forEach((str) => {
    let word = str.split(" ").map(char => {
      return char.slice(0,1).toUpperCase() + char.slice(1);
    }).join(" ");
    formatedColors.push(word)
  });
  return formatedColors;
}
