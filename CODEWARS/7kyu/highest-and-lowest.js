/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers) {
    // Split the input string into an array of individual numbers
    const numberArray = numbers.split(" ");
  
    // Convert each string element in the array to a number
    const parsedNumbers = numberArray.map(Number);
  
    // Find the maximum and minimum numbers using the spread operator
    const maxNumber = Math.max(...parsedNumbers);
    const minNumber = Math.min(...parsedNumbers);
  
    // Return the highest and lowest numbers as a string
    return `${maxNumber} ${minNumber}`;
  }
  