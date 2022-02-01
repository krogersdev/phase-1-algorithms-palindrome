function isPalindrome(word) {
  let reversedString = word.split('').reverse().join('');

  if (reversedString === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  - declare a varible and assign it to the string. 
  - using JS built-in methods, split each letter into an Array, use reverse array method to reverse the array of strings
  - finally, join all of the strings for the final reversed value. 
  - use if statement to check whether our reversed string and the original string will return truthy. 
  

*/

/*
  Add written explanation of your solution here
  step 1- declare variable and assign it to the parameter(word) to hold the string so, we cab operate on it. 
  step 2 - chain on the split method to separate the strings into an array, reverse the array with reverse method, final join it back
  step 3 - using the strict comparison i compared the reversed string with the argument(stringt of the function. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
