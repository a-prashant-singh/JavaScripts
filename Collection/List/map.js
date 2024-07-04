const myMap = new Map();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set(1, 'value3');

console.log(myMap); // Output: Map(3) { 'key1' => 'value1', 'key2' => 'value2', 1 => 'value3' }

console.log(myMap.get('key1')); // Output: 'value1'
console.log(myMap.get(1)); // Output: 'value3'
console.log(myMap.get('key3')); // Output: undefined

console.log(myMap.has('key1')); // Output: true
console.log(myMap.has('key3')); // Output: false

myMap.delete('key2');
console.log(myMap); // Output: Map(2) { 'key1' => 'value1', 1 => 'value3' }

console.log(myMap.size); // Output: 2

myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// 'key1': 'value1'
// 1: 'value3'

for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}
// Output:
// 'key1': 'value1'
// 1: 'value3'


for (const key of myMap.keys()) {
    console.log(key);
}
// Output:
// 'key1'
// 1

for (const value of myMap.values()) {
    console.log(value);
}
// Output:
// 'value1'
// 'value3'

for (const [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`);
}
// Output:
// 'key1': 'value1'
// 1: 'value3'

const users = new Map();

users.set('user1', { name: 'Alice', age: 25 });
users.set('user2', { name: 'Bob', age: 30 });

console.log(users.get('user1')); // Output: { name: 'Alice', age: 25 }
console.log(users.has('user2')); // Output: true

users.forEach((value, key) => {
    console.log(`${key}: ${JSON.stringify(value)}`);
});
// Output:
// 'user1': '{"name":"Alice","age":25}'
// 'user2': '{"name":"Bob","age":30}'
