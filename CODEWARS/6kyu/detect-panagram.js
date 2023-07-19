/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// Solution

function isPangram(string) {
    // Convert the input string to lowercase
    string = string.toLowerCase();
  
    // Create an array to store the occurrence of each letter in the alphabet
    const letters = [];
  
    // Iterate over each character in the string
    for (let i = 0; i < string.length; i++) {
      // Get the current character
      const char = string[i];
  
      // Check if the character is a letter from 'a' to 'z'
      if (/[a-z]/.test(char)) {
        // Get the ASCII code of the character and calculate its index in the 'letters' array
        const index = char.charCodeAt() - 97;
  
        // Mark the letter as occurred by setting the corresponding element in the 'letters' array to true
        letters[index] = true;
      }
    }
  
    // Check if any letter in the alphabet is missing by searching for undefined elements in the 'letters' array
    for (let i = 0; i < 26; i++) {
      if (!letters[i]) {
        // If a letter is missing, return false
        return false;
      }
    }
  
    // If all letters are present, return true
    return true;
  }
  