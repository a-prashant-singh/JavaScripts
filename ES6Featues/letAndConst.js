//3.Let and const
let a=10;
const b=20;
a=15;
//b=25;// this is not allowed
console.log(`value of a is ${a} and value of b is ${b}`);


// Scope:
// var: Function-scoped.
// let and const: Block-scoped. within { }

// Hoisting:
// var: Hoisted to the top of its scope and initialized with undefined.
// let and const: Hoisted to the top of their block scope but not initialized (temporal dead zone).

// Reassignment:
// var and let: Can be reassigned.
// const: Cannot be reassigned after initial assignment.

// Global Object:
// var: Declares a property on the global object if used in the global scope.
// let and const: Do not declare properties on the global object if used in the global scope.
