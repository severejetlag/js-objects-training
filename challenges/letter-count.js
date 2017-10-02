/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
function letterCount(string){
  string = string.toLowerCase()
  let stringArr = string.split('');
  stringArr = stringArr.sort()
  let countLetters = 0; 
  let currentLetter = stringArr[0];
  let outcome = {};
  stringArr.forEach(function(letter,index){
    if(stringArr[index] !== currentLetter){
      countLetters = 1;
      currentLetter = stringArr[index];
    }else{
      countLetters++;
    }
    outcome[currentLetter] = countLetters;
  })
  console.log(outcome);
}

var string = "AAAaaapple";

letterCount(string);




