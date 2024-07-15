function binarySearch(arr, x)
{    
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
         mid = Math.floor((high + low) / 2);
 
        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;
 
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            high = mid - 1;
            
        // Else the element can only be present
        // in right subarray
        else 
            low = mid + 1;
    }
 
    // We reach here when element is not
    // present in array
    return -1;
}

   let arr =new Array(2, 3, 4, 10, 40,50);
   let x = 40;
//    let n = arr.length;
  let  result = binarySearch(arr, x);
    
(result == -1) ? console.log("Element is not present in array")
               : console.log("Element is present at index " + result);
               
