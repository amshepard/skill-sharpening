/*
Description
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

Don't worry about uppercase vowels
"Y" is not considered a vowel for this kata
*/

//my solution

const shortcut = string => 
  string.replace(/[aeiou]/g, '') 


/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

The replace() method returns a new string with one, some, 
or all matches of a pattern replaced by a replacement. 
The pattern can be a string or a RegExp, and the replacement 
can be a string or a function called for each match. 
If pattern is a string, only the first occurrence will be replaced. 
The original string is left unchanged.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

Character classes distinguish kinds of characters such as, for example, 
distinguishing between letters and digits.

For an introduction to regular expressions, 
read the Regular Expressions chapter in the JavaScript Guide.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

The "g" after the regular expression is an option or flag that performs a 
global search, looking in the whole string and returning all matches. 
It is explained in detail below in Advanced Searching With Flags.



*/

  // end.