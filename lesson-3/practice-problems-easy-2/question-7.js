let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};

console.log(Object.entries(flintstones));
console.log(Object.entries(flintstones).filter(element => element[0] === "Barney"));

console.log(Object
  .entries(flintstones) // Returns an array of key value paired arrays. Corresponding to the object its called on.
  .filter(element => element[0] === "Barney") // Checks the first element in each sub array untill a match is found.
  .shift()); // Removes the first and only element in the array which is another array form the array it is nested in.
