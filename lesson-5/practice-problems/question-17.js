
let hexadecimalValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                        "a", "b", "c", "d", "e", "f"];
let rawUUID = [];

for (let i = 1; i <= 32; i++) {
  let randomIndex = randomIntFromInterval(0, 15);
  rawUUID.push(hexadecimalValue[randomIndex]);
}

let section1 = rawUUID.slice(0,8).concat("-");
let section2 = rawUUID.slice(8,12).concat("-");
let section3 = rawUUID.slice(12,16).concat("-");
let section4 = rawUUID.slice(16,20).concat("-");
let section5 = rawUUID.slice(20);

let UUID = section1
  .concat(section2)
  .concat(section3)
  .concat(section4)
  .concat(section5)
  .join("");

console.log(UUID);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
