
    //Eg.1-
    // Example array
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi'];
    // Using splice() to remove 2 elements starting from index 1
    const removedFruits = fruits.splice(1, 2);
    console.log(fruits); // Output: ['Apple', 'Mango', 'Kiwi']
    console.log(removedFruits); // Output: ['Banana', 'Orange']

    //Eg.2-
    // Example array
    const fruits1 = ['Apple', 'Mango', 'Kiwi'];
    // Using splice() to add elements at index 1
    fruits1.splice(1, 0, 'Banana', 'Orange');
    console.log(fruits1); // Output: ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi']


    //Eg.3-
    // Example array
    const fruits2 = ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi'];
    // Using splice() to remove 1 element at index 2 and add 2 elements
    const removedAndAddedFruits = fruits2.splice(2, 1, 'Grapes', 'Pineapple');
    console.log(fruits2); // Output: ['Apple', 'Banana', 'Grapes', 'Pineapple', 'Mango', 'Kiwi']
    console.log(removedAndAddedFruits); // Output: ['Orange']

