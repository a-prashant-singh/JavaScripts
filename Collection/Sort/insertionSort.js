function insertionSort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
       let current=arr[i]                   //[3, 5, 8,0, 4, 2,99]//current=3,j=0 3<5, 
       let j=i-1;                           //[3, 5, 8,0, 4, 2,99]//current=8,j=1 8<5,
       while(j>=0 && current < arr[j])      //[0, 3, 5,8, 4, 2,99]//current=0,j=0 0<3,
        {
            arr[j+1]=arr[j]
            j--
        }

       arr[j+1]=current
      
      
    }
    return arr;

}

const array1 = [5, 3, 8,0, 4, 2,99];
console.log(insertionSort(array1)); // Output: [2, 3, 4, 5, 8]

const array2 = [20, -10, 15, 0, -5];
console.log(insertionSort(array2)); // Output: [-10, -5, 0, 15, 20]

const array3 = ['z','banana', 'apple', 'cherry', 'date','z'];
console.log(insertionSort(array3)); // Output: ['apple', 'banana', 'cherry', 'date']
