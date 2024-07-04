
    // Example string
const str = 'Hello, World!';

// Using charCodeAt() to get the Unicode value of the character at index 0
const firstCharCode = str.charCodeAt(0);

console.log(firstCharCode); // Output: 72 (Unicode value of 'H')

// Using charCodeAt() to get the Unicode value of the character at index 7
const eighthCharCode = str.charCodeAt(7);

console.log(eighthCharCode); // Output: 87 (Unicode value of 'W')

// Using charCodeAt() to get the Unicode value of the character at the last index
const lastCharCode = str.charCodeAt(str.length - 1);

console.log(lastCharCode); // Output: 33 (Unicode value of '!')

