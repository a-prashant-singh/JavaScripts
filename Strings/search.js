
    // Example string
const str = 'Hello, World! Welcome to the world of JavaScript.';

// Using search() to find the first occurrence of the word 'World'
const indexWorld = str.search('World');

console.log(indexWorld); // Output: 7

// Using search() with a regular expression to find the first occurrence of the word 'world' (case-insensitive)
const indexWorldCaseInsensitive = str.search(/world/i);

console.log(indexWorldCaseInsensitive); // Output: 7

// Using search() with a regular expression to find the first occurrence of a word starting with 'W'
const indexWordWithW = str.search(/\bW\w*/);

console.log(indexWordWithW); // Output: 7

// Using search() to find a substring that does not exist
const indexNotFound = str.search('Goodbye');

console.log(indexNotFound); // Output: -1

