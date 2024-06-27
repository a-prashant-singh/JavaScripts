

    //Eg.1-
    const numbers = [2, 4, 6, 8, 10];
    // Check if all numbers are even
    const allEven = numbers.every(num => num % 2 === 0);
    console.log(allEven); // Output: true

    //Eg.2-
    const ages = [18, 22, 16, 24];
    // Check if all elements are at least 18
    const allAdults = ages.every((age, index, array) =>
    {
    console.log(`Checking age at index ${index}: ${age} :${array}`);
    return age >= 18;
    });
    console.log(allAdults); // Output: false
  
    //Eg.3-
   const threshold = {
    min: 5
    };

    const numbersArray = [10, 15, 20];
    // Check if all numbers are greater than or equal to the threshold
    const aboveThreshold = numbersArray.every(
    function(num) 
    {
    console.log(threshold.min);
    return num >= threshold.min;
    }
    );

    console.log(aboveThreshold); // Output: true

    //Eg.4-
    const sparseArray = [1, , 3]; // Note the missing element at index 1
    // Check if all defined elements are greater than 0
    const allPositive = sparseArray.every(
    (num) => 
    {
    console.log(`Checking value: ${num}`);
    return num > 0;
    });

console.log(allPositive); // Output: true



