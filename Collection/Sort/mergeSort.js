function divide(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort each half and merge them
    return merge(divide(left), divide(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two arrays while comparing elements
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements in left or right
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const array1 = [5, 3, 8, 4, 2];
console.log(divide(array1)); // Output: [2, 3, 4, 5, 8]

// const array2 = [20, -10, 15, 0, -5];
// console.log(mergeSort(array2)); // Output: [-10, -5, 0, 15, 20]

// const array3 = ['banana', 'apple', 'cherry', 'date'];
// console.log(mergeSort(array3)); // Output: ['apple', 'banana', 'cherry', 'date']

