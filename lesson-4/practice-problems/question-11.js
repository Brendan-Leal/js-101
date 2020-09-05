// Create an object that expresses the frequency with which each letter occurs
// in this string:
let statement = "The Flintstones Rock";
let charCount = {};
let strArr = statement.split("");

for (let i = 0; i < strArr.length; i++) {
  if (strArr[i] === " ") continue;

  if (isCharInObj(strArr[i], charCount)) {
    charCount[strArr[i]] += 1;
  } else {
    charCount[strArr[i]] = 1;
  }
}

console.log(charCount);

function isCharInObj(char, obj) {
  let keysArray = Object.keys(obj);

  return keysArray.includes(char);
}

/*
1. split the string into an array of characters
2. create an empty object to hold the final result
3. take the first character of the array and test if it is a key in the Object
  - If not assign a new key to the object of that character and set its value to
    1
  - If it is then increase its value by 1.
*/

/*
      How do you test if the character is any of the objects values?
1. create an array of values derived from the object
2. if the character is in the array return true
  else return false.

*/
