
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}


const array = [10, 20, 30, 40, 50];
const target = 30;

const index = linearSearch(array, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found');
}


const array1 = [1, 2, 3, 4, 5];
const target1 = 3;
console.log(linearSearch(array1, target1)); // Output: 2

const array2 = ['apple', 'banana', 'cherry'];
const target2 = 'banana';
console.log(linearSearch(array2, target2)); // Output: 1

const array3 = [10, 20, 30, 40, 50];
const target3 = 60;
console.log(linearSearch(array3, target3)); // Output: -1

