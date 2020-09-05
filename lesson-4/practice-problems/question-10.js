// Pick out the minimum age from our current Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// Created an array with the values of the object, sort the array from lowest to
// highest, return the first element.
let youngestAge = Object.values(ages).sort()[0];
console.log(youngestAge);
