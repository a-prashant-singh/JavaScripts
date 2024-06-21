// Example function that takes a callback
 function doSomethingAsync(callback) {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
 setTimeout(function() {
      const result = 'Data fetched successfully';
      // Call the callback function with the result
    callback(result);
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  // Callback function to handle the result
  function handleResult(result) {
    console.log('Handling result:', result);
  }
  
  // Call doSomethingAsync and pass the handleResult function as a callback
  console.log('Starting asynchronous operation...');
  doSomethingAsync(handleResult);
  console.log('Asynchronous operation started.');
  