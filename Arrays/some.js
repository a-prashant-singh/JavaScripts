
    //Eg.1-
    var arr = [12, 81, 23, 34];
    function test(arr) {
        return (arr > 80);
    } // test() will return a true value.  
    var ajen = arr.some(test);
    console.log(("Its " + ajen));

    //Eg.2-
    var arr1 = ['John', 'Tom', 'James', 'Sheero']; // An array is defined  
    function ismatching(arr1) {
        return arr1 == 'Sheero';
    } //It matches if any element in the array is equal to Sheero.  
    var chk = arr1.some(ismatching);
    document.write("Yes, " + chk + ". One match found.");

    //Eg.3-
    var arr2 = [2, 3, 4, 6, 9]; //Defining array elements  
    function check(arr2) {
        return arr2 % 2 == 0;
    } //This function checks if any element is even or not.  
    var test = arr2.some(check);
    document.write("Yes, " + test);

    //Eg.4-
    var arr3 = [2, 3, 4, 6, 9]; //Defining array elements  
    var check = (element) => element % 2 === 0;
    document.write("Yes found. So, it should be ");
    document.write(arr3.some(check));  
