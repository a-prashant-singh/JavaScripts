function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i=1;i<arr.length;i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else  {
            right.push(arr[i]);
         } 
   
     }

    return [...quickSort(left), pivot,...quickSort(right)];
}
const array1 = [5, 3,4, 8, 4, 2];
console.log(quickSort(array1)); // Output: [2, 3, 4, 5, 8]

const array2 = [20, -10, 15, 0, -5];
console.log(quickSort(array2)); // Output: [-10, -5, 0, 15, 20]

const array3 = ['banana', 'apple', 'cherry', 'date'];
console.log(quickSort(array3)); // Output: ['apple', 'banana', 'cherry', 'date']
