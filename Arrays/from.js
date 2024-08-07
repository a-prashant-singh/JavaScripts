
    //Eg.1-
    // Convert a string to an array
    const str = "hello";
    const arr = Array.from(str);
    console.log(arr); // Output: ["h", "e", "l", "l", "o"]

    //Eg.2-
    const set = new Set(['apple', 'banana', 'cherry']);
    const arr1 = Array.from(set);
    console.log(arr1); // Output: ["apple", "banana", "cherry"]

    

    //Eg.4-
    // Convert a string to an array of character codes
    const str3 = "hello";
    const arr3 = Array.from(str3, char => char.charCodeAt(0));
    console.log(arr3); // Output: [104, 101, 108, 108, 111]

    //Eg.5-
    const obj = {
        factor: 10,
        multiply(val) {
            return val * this.factor;
        }
    };
    const numbers = [1, 2, 3, 4, 5];
    const arr4 = Array.from(numbers, obj.multiply, obj);
    console.log(arr4); // Output: [10, 20, 30, 40, 50]

    //Eg.6-
    const iterable = {
        *[Symbol.iterator]() {
            yield 1;
            yield 2;
            yield 3;
        }
    };
    const arr5 = Array.from(iterable);
    console.log(arr5); // Output: [1, 2, 3]

    //Eg.7-
    // Create an array of 5 elements, all initialized to 0
    const arr6 = Array.from({ length: 5 }, () => 0);
    console.log(arr6); // Output: [0, 0, 0, 0, 0]

