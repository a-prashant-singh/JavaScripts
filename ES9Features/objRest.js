const person = { 
	firstName: 'Rohan', 
	lastName: 'Nanda', 
	age: 23, 
	city: 'Noida'
}; 

let { firstName, lastName, ...rest } = person; 

console.log(firstName); 
console.log(lastName); 
console.log(rest);
