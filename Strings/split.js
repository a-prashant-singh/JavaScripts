
    // Example string
const str = 'apple,banana,orange';

// Using split() to split the string into an array using ','
const fruitsArray = str.split(',');

console.log(fruitsArray); // Output: ['apple', 'banana', 'orange']

// Example1 string
const str1 = 'apple,banana,orange';

// Using split() with a regular expression to split the string into an array using ',' or ';' as separators
const fruitsArray1 = str1.split(/[,;]/);

console.log(fruitsArray1); // Output: ['apple', 'banana', 'orange']

