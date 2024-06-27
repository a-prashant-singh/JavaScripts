//5. Destructuring Assignment
//Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
// Array destructuring
const [num1, num2] = [1, 2];
console.log(num1, num2); // Output: 1 2

// Object destructuring
const { name, age } = { name: 'Bob', age: 30 };
console.log(name, age); // Output: Bob 30

var arr=[1,2,3,4];
const[n1,n2,n3,n4]=arr;
console.log(`${n1} ${n2} ${n3} ${n4}`);