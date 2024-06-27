
    // Example array of objects
const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 21 },
  { id: 4, name: 'David', age: 23 }
];

// Using findIndex() to get the index of the first student with age greater than or equal to 22
const olderStudentIndex = students.findIndex(student => student.age >= 22);

console.log(olderStudentIndex); // Output: 1
