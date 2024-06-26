
    //Eg.1-
    let arr = [1, 2, 3, 4, 5];
    // Fill all elements with 0
    arr.fill(0);
    console.log(arr); // Output: [0, 0, 0, 0, 0]

    //Eg.2-
    let arr1 = [1, 2, 3, 4, 5];
    // Fill elements from index 1 to 3 with 0
    arr1.fill(0, 1, 3);
    console.log(arr1); // Output: [1, 0, 0, 4, 5]

    //Eg.3-
    let arr2 = [1, 2, 3, 4, 5];
    // Fill elements from index -3 to -1 with 0
    arr2.fill(0, -3, -1);
    console.log(arr2); // Output: [1, 2, 0, 0, 5]

    //Eg.4-
    let arr3 = [1, 2, 3, 4, 5];
    // Fill elements from index 2 to the end with 7
    arr3.fill(7, 2);
    console.log(arr3); // Output: [1, 2, 7, 7, 7]

    //Eg.5-
    let arr4 = new Array(3);
    // Fill the array with objects
    arr4.fill({ name: 'Alice' });
    console.log(arr4); // Output: [{ name: 'Alice' }, { name: 'Alice' }, { name: 'Alice' }]
    // Modifying one object will affect all elements
    arr4[0].name = 'Bob';
    console.log(arr4); // Output: [{ name: 'Bob' }, { name: 'Bob' }, { name: 'Bob' }]

    //Eg.6-
    let arr5 = new Array(5);
    // Fill different parts of the array with different values
    arr5.fill(1, 0, 2);
    arr5.fill(2, 2, 4);
    arr5.fill(3, 4);
    console.log(arr5); // Output: [1, 1, 2, 2, 3]
