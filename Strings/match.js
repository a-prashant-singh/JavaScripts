
    // Example string
const str = 'Hello, World! Welcome to the world of JavaScript.';

// Using match() to find all occurrences of the word 'world' (case-insensitive)
const matchesWorld = str.match(/world/gi);

console.log(matchesWorld); // Output: ['World', 'world']

// Using match() to find all words starting with 'W'
const matchesWordsWithW = str.match(/\bW\w*/g);

console.log(matchesWordsWithW); // Output: ['World', 'Welcome', 'world']

// Using match() to find all occurrences of vowels
const matchesVowels = str.match(/[aeiou]/gi);

console.log(matchesVowels); // Output: ['e', 'o', 'o', 'e', 'o', 'e', 'o', 'e', 'o', 'o', 'a', 'a', 'i']

// Using match() to find a substring that does not exist
const noMatches = str.match(/Goodbye/);

console.log(noMatches); // Output: null

