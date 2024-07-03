
    //Eg.1-
    var arr = [2, 3, 1, 5];
    var a = arr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
   console.log("The sum of the array elements is: " + a);

    //Eg.2-
    var a1 = [30, 15, 5];
    console.log("The difference of the array elements is: ");
    console.log(a1.reduce(reducer_func));
    
    function reducer_func(net1, n1) {
        return net1 - n1;
    }
    //Eg.3-
    var net2 = [3, 2, 5, 1, 7];
    var calc2 = net2.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0);
        console.log("The total of the array elements comes out to be: " + calc2);

    //Eg.4-
    var net3 = [3]; //Array with one element.  
    var calc3 = net3.reduce(
        (accumulator, currentValue) => accumulator + currentValue);
console.log("The total of the array element comes out to be: " + calc3);  
