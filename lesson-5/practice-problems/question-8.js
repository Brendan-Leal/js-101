let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach((array) => {
  array.forEach((str) => {
    let extractedVowels = str.split("").filter(char => {
      let vowels = "aeiou";
      return vowels.includes(char);
    });
    console.log(extractedVowels.join(""));
  });

});
