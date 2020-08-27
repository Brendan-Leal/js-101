let str1 = "Come over here!";
let str2 = "What's! up, Doc?";

function endsWithExclamation(str) {
  if (str.endsWith("!")) {
    console.log("The string ends with an exclamation");
  } else {
    console.log("The string DOES NOT end with and exclamaion");
  }
}

endsWithExclamation(str1);
endsWithExclamation(str2);
