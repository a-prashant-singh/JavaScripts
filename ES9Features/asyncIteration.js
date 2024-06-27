const myArray = [1, 2, 3, 4, 5]; 

// A function that returns a promise that resolves after a random delay 
async function doSomethingAsync(item) { 
	return new Promise(resolve => { 
		setTimeout(() => { 
			console.log(item); 
			resolve(); 
		}, Math.random() * 2000); 
	}); 
} 

async function main() { 
	// Iterate over the array using a for-of loop 
	for (const item of myArray) { 
		// Wait for the promise returned 
		//by doSomethingAsync to resolve 
		await doSomethingAsync(item); 
	} 
} 

// Call main to start the program. 
main();
