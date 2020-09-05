// Write a program that uses this array to create an object where the names are
// the keys and the values are the positions in the array:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintObj = Object.assign({}, flintstones);
/*
My initail idea was to treat the array like a normal object, which it is, and
use the assign method to merge the 2 objects. And it worked.
*/
console.log(flintObj);
console.log(flintstones);
