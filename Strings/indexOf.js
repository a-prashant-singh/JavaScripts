
    // Example string
const str = 'Hello, World!';

// Using indexOf() to find the first occurrence of 'o'
const indexO = str.indexOf('o');

console.log(indexO); // Output: 4

// Using indexOf() to find the first occurrence of 'World'
const indexWorld = str.indexOf('World');

console.log(indexWorld); // Output: 7

// Using indexOf() to find a substring that does not exist
const indexNotFound = str.indexOf('Goodbye');

console.log(indexNotFound); // Output: -1

// Using indexOf() with a starting position
const indexOAfter5 = str.indexOf('o', 5);

console.log(indexOAfter5); // Output: 8

