function selectionSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        // Assume the minimum is the first unsorted element
        let minIndex = i;

        // Find the index of the smallest element in the unsorted part
        for (let j = i + 1; j < length; j++) {
            if ( arr[minIndex]>arr[j]) {            //[5,3,8,4,2]
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first unsorted element
        if (minIndex != i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        console.log(arr)
    }

    return arr;
}



const array1 = [5, 3, 8, 4, 2];
console.log(selectionSort(array1)); // Output: [2, 3, 4, 5, 8]

// const array2 = [20, -10, 15, 0, -5];
// console.log(selectionSort(array2)); // Output: [-10, -5, 0, 15, 20]

// const array3 = ['banana', 'apple', 'cherry', 'date'];
// console.log(selectionSort(array3)); // Output: ['apple', 'banana', 'cherry', 'date']
