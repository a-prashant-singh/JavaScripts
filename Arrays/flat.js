
    //Eg.1-
    const arr = [1, [2, [3, 4], [5, [6, 7]]]];
    // Flatten the array to a depth of 1 bydefault
    const flatArr = arr.flat();
    console.log(flatArr); // Output: [1, 2, 3, 4, 5, [6, 7]]

    //Eg.2-
    const arr1 = [1, 2, [3, 4], [5, [6, 7]]];
    // Flatten the array to a depth of 2
    const flatArr1 = arr1.flat(2);
    console.log(flatArr1); // Output: [1, 2, 3, 4, 5, 6, 7]


    //Eg.3-
    const arr2 = [1, [2, [3, [4, [5]]]]];
    // Flatten the array completely using Infinity as the depth
    const flatArr2 = arr2.flat(Infinity);
    console.log(flatArr2); // Output: [1, 2, 3, 4, 5]

    //Eg.4-
    const groups = [
        ['Alice', 'Bob'],
        ['Charlie', 'Dave'],
        ['Eve', 'Frank']
    ];
    // Flatten the array of groups to create a single list of students
    const allStudents = groups.flat();
    console.log(allStudents); // Output: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank']
