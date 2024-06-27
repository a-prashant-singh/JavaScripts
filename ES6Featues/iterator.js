
// 11.Iterators and Generators
//Iterators provide a standardized way to iterate over data structures, while generators 
//simplify iterator creation with a function-based syntax.

// Iterator example
const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3

// Generator example
function* generatorFunction() {
    yield "p";
    yield 2;
    yield 3;
}

const generator = generatorFunction();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3

