/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
Write out the problem in your own words:

-Given a string convert all upercase characters to lower case characters and
all lower case characters to upper case characters.

Expected Input: A single String
Expected Output: A single string

Implicit Rules if any:

Mental Model:
-
-
----------------------------Examples/ Test Cases--------------------------------
Validate your understanding of the problem

Example 1: "The Munsters are creepy and spooky."
Output: "tHE mUNSTERS ARE CREEPY AND SPOOKY.""

Example 2: "Hello WORLD!"
Output: "hELLO world!"

Test Case 1:
Test Case 2:
---------------------------Data Structures and Algorithm------------------------
1. Create a function that accepts a string as a parameter.
2. Split that string into an Array of characters
3. Use a for loop to iterate over each character
  - If the character is upper case then change it to lower case charater
  - Else if the character is lower cased then change it to an upper case charater
4. Join the array back into a String
5. Return the reformated string.
--------------------------------------------------------------------------------
1.
2.
3.
4.
*/

//-----------------------------------Code---------------------------------------
let munstersDescription = "The Munsters are creepy and spooky.";

function swapCases(str) {
  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      str[i] = str[i].toLowerCase();
    } else {
      str[i] = str[i].toUpperCase();
    }
  }
  str = str.join("");
  return str;
}

console.log(swapCases(munstersDescription));
console.log(swapCases("Hello WORLD!"));
