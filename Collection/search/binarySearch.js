function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}


function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found at index mid
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right); // Search in the right half
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1); // Search in the left half
    }
}


const sortedArray1 = [1, 2, 3, 4, 5];
const target1 = 5;
console.log(binarySearchIterative(sortedArray1, target1)); // Output: 2
console.log(binarySearchRecursive(sortedArray1, target1)); // Output: 2

const sortedArray2 = ['apple', 'banana', 'cherry'];
// const target2 = 'banana';
// console.log(binarySearchIterative(sortedArray2, target2)); // Output: 1
// console.log(binarySearchRecursive(sortedArray2, target2)); // Output: 1

// const sortedArray3 = [10, 20, 30, 40, 50];
// const target3 = 60;
// console.log(binarySearchIterative(sortedArray3, target3)); // Output: -1
// console.log(binarySearchRecursive(sortedArray3, target3)); // Output: -1
