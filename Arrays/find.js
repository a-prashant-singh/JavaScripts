
    // Example array of objects
const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 21 },
  { id: 4, name: 'David', age: 23 }
];

// Using find() to get the first student with age greater than or equal to 22
const olderStudent = students.find(student => student.age >= 22);

console.log(olderStudent); // Output: { id: 2, name: 'Bob', age: 22 }

