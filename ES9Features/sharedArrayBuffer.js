// Create a SharedArrayBuffer and an Int32Array view 
const sharedBuffer = new SharedArrayBuffer(4); 
const sharedArray = new Int32Array(sharedBuffer); 

// Modify the shared value in the main thread 
sharedArray[0] = 42; 

// Log the shared value 
console.log(sharedArray[0]);
