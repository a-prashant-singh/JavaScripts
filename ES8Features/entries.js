const person = { 
    name: 'Alice', 
    age: 30 
};
const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'Alice'], ['age', 30]]

entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 30
