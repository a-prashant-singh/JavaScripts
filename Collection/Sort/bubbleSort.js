

function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++)
    {
        for (let j = 0; j < arr.length-i-1; j++) {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp   
            }
            
        }
    }

    return arr
}


const array1 = [5,4,3,2,1];
console.log(bubbleSort(array1)); // Output: [2, 3, 4, 5, 8]

const array2 = [20, -10, 15, 0, -5];
console.log(bubbleSort(array2)); // Output: [-10, -5, 0, 15, 20]

const array3 = ['banana', 'apple', 'cherry', 'date'];
console.log(bubbleSort(array3)); // Output: ['apple', 'banana', 'cherry', 'date']
