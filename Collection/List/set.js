const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate, will be ignored
mySet.add('text');

console.log(mySet); // Output: Set { 1, 5, 'text' }
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(3)); // Output: false
mySet.delete(5);
console.log(mySet); // Output: Set { 1, 'text' }
console.log(mySet.size); // Output: 2

mySet.forEach(value => {
    console.log(value);
});
// Output:
// 1
// 'text'

for (const value of mySet) {
    console.log(value);
}
// Output:
// 1
// 'text'

const setValues = mySet.values();
for (const value of setValues) {
    console.log(value);
}
// Output:
// 1
// 'text'

const arrayFromSet = Array.from(mySet);
console.log(arrayFromSet); // Output: [1, 'text']

const arrayFromSetSpread = [...mySet];
console.log(arrayFromSetSpread); // Output: [1, 'text']

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = new Set(array);
console.log(uniqueSet); // Output: Set { 1, 2, 3, 4, 5 }

const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 10];
const uniqueNumbers = new Set(numbers);

console.log([...uniqueNumbers]); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
