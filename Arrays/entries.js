
// Methods of Arrays


//entries()
let fruits = ['apple', 'banana', 'cherry'];

// Get the iterator object using entries() method
let iterator = fruits.entries();

// Iterate through the key/value pairs
for (let entry of iterator) {
  console.log(entry);
}

// Output:
// [0, 'apple']
// [1, 'banana']
// [2, 'cherry']


let colors = ['red', 'green', 'blue'];

// Get the iterator object using entries() method
let colorIterator = colors.entries();

// Iterate through the key/value pairs
for (let [index, color] of colorIterator) {
  console.log(`Index: ${index}, Color: ${color}`);
}

// Output:
// Index: 0, Color: red
// Index: 1, Color: green
// Index: 2, Color: blue

let numbers = [10, 20, 30, 40];

// Get the iterator object using entries() method
let numberIterator = numbers.entries();

// Convert the iterator to an array
let entriesArray = Array.from(numberIterator);

console.log(entriesArray);

// Output: 
// [[0, 10], [1, 20], [2, 30], [3, 40]]


let sparseArray = [1, , 3]; // Note the missing element at index 1

// Get the iterator object using entries() method
let sparseIterator = sparseArray.entries();

// Iterate through the key/value pairs
for (let [index, value] of sparseIterator) {
  console.log(`Index: ${index}, Value: ${value}`);
}

// Output:
// Index: 0, Value: 1
// Index: 1, Value: undefined
// Index: 2, Value: 3


