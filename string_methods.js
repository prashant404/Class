//Strings

//length -- returns the length of string

let str = "Hello";
console.log(str.length);

//toUpperCase --  converts string to uppercase
console.log(str.toUpperCase());

//toLowerCase -- converts string to lowercase

console.log(str.toLowerCase());

//indexOf
//returns the index of the first occurrence of the specified value, or -1 if not found
let str1 = "Hello";
console.log(str1.indexOf("l"));
console.log(str1.indexOf("a"));

//slice(start,end) -- extracts part of a string from start to end(excluding end)
console.log(str1.slice(2, 4));

const myString = "apple, banana, apple, orange, apple";

// Using replace()
const newStringReplace = myString.replace("apple", "grape");
console.log(newStringReplace); // Output: "grape, banana, apple, orange, apple"

// Using replaceAll()
const newStringReplaceAll = myString.replaceAll("apple", "grape");
console.log(newStringReplaceAll); // Output: "grape, banana, grape, orange, grape"

let myString1 = "The price is $10 and the quantity is 5";
let newString = myString1.replace(/\d+/g, (match) => {
  return parseInt(match) * 2;
});
console.log(newString);

//trim -- removes whitespaces from both ends
let str2 = "   Hello   ";
console.log(str2);
console.log(str2.trim());

//split -- splits the string into an array using seperator
let str3 = "Hello, World, JavaScript";
console.log(str3.split(" "));

//charAtIndex
let str4 = "Hello";
console.log(str4[0]);
console.log(str4[1]);

// Varun Jajoo

let str5 = "Varun Jajoo";
let result = "";

for (let i = 0; i < str5.length; i++) {
  let char = str5[i];
  if (char === char.toUpperCase()) {
    result += char.toLowerCase();
  } else {
    result += char.toUpperCase();
  }
}
console.log("result using loop : " + result); // Output: varun JAJOO

let result1 = str5
  .split("")
  .map((char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  )
  .join("");
console.log("result using map : " + result1); // Output: varun JAJOO

