
    // Example string
const str = 'Hello, World! Hello again!';

// Using lastIndexOf() to find the last occurrence of 'o'
const lastIndexO = str.lastIndexOf('o');

console.log(lastIndexO); // Output: 20

// Using lastIndexOf() to find the last occurrence of 'Hello'
const lastIndexHello = str.lastIndexOf('Hello');

console.log(lastIndexHello); // Output: 13

// Using lastIndexOf() to find a substring that does not exist
const lastIndexNotFound = str.lastIndexOf('Goodbye');

console.log(lastIndexNotFound); // Output: -1

// Using lastIndexOf() with a starting position
const lastIndexOBefore15 = str.lastIndexOf('o', 15);

console.log(lastIndexOBefore15); // Output: 4

