
    //Eg.1-
    const arr = [1, 2, 3, 4];
    // Use flatMap to map and flatten the array
    const result = arr.flatMap(x => [x, x * 2]);
    console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]

    //Eg.2-
    const arr1 = [1, 2, [3, 4], [5, [6, 7]]];
    // Use flatMap to remove one level of nesting
    const result1 = arr1.flatMap(x => Array.isArray(x) ? x : [x]);
    console.log(result1); // Output: [1, 2, 3, 4, 5, [6, 7]]


    //Eg.3-
    const sentences = ["This is great", "Hello World", "JavaScript is awesome"];
    // Use flatMap to split sentences into words and flatten the result
    const words = sentences.flatMap(sentence => sentence.split(' '));
    console.log(words);
    // Output: ["This", "is", "great", "Hello", "World", "JavaScript", "is", "awesome"]

    //Eg.4-
    const orders = [
        { id: 1,
         items: ["apple", "banana"] 
        },
        { id: 2, 
        items: ["orange"] 
        },
        { id: 3, 
        items: ["grapes", "watermelon"] 
        }
        
    ];
    // Use flatMap to extract and flatten the items from each order
    const allItems = orders.flatMap(order => order.items);
    console.log(allItems);
    // Output: ["apple", "banana", "orange", "grapes", "watermelon"]

    //Eg.5-
    const multiplier = {
        factor: 10,
        multiply(x) {
            return x * this.factor;
        }
    };
    const numbers = [1, 2, 3, 4];
    // Use flatMap with thisArg to access the context
    const result2 = numbers.flatMap(function (num) {
        return [num, this.multiply(num)];
    }, multiplier);
    console.log(result2);
    // Output: [1, 10, 2, 20, 3, 30, 4, 40]
