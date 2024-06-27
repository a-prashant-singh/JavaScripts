const person = { name: 'Alice', age: 30 };
const values = Object.values(person);
console.log(values); // Output: ['Alice', 30]

values.forEach(value => {
  console.log(value);
});
// Output:
// Alice
// 30
