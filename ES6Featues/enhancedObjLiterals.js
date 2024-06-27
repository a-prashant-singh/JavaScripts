//7. Enhanced Object Literals
//ES6 introduces shorthand syntax for initializing properties and methods in object literals.
const ename = 'Alice';
const eage = 25;

const person = {
    ename,
    eage,
    greet() {
        console.log(`Hello, my name is ${this.ename}`);
    }
};

person.greet(); 
