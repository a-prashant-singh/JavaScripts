function outerFunction() {
    const outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // The inner function has access to the outer function's variables
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: 'I am from the outer function'


function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = createAdder(5);
console.log(add5(2)); // Output: 7
console.log(add5(10)); // Output: 15

const add10 = createAdder(10);
console.log(add10(5)); // Output: 15
console.log(add10(20)); // Output: 30
