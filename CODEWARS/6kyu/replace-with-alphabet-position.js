/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
    // Create an empty string to store the resulting alphabet positions
    let result = "";
  
    // Convert the input text to lowercase
    text = text.toLowerCase();
  
    // Iterate over each character in the text
    for (let i = 0; i < text.length; i++) {
      // Get the current character
      const char = text[i];
  
      // Check if the character is a letter from 'a' to 'z'
      if (/[a-z]/.test(char)) {
        // Calculate the alphabet position (1-based) by subtracting the character code of 'a'
        const position = char.charCodeAt() - 'a'.charCodeAt() + 1;
  
        // Append the position to the result string
        result += position + " ";
      }
    }
  
    // Remove the trailing space from the result string and return it
    return result.trim();
  }
  