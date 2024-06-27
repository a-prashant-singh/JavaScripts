

    //Eg.1-
    var arr = [21, 2, 1, 4];
    var calc = arr.reduceRight(function (x, y) {
        return (x + y);
    });
    document.write(" The sum of the elements is: " + calc);

    //Eg.2-
    var arr1 = ['t', 'p', 'i', 'r', 'c', 's', 'a', 'v', 'a', 'j'];
    var res = arr1.reduceRight(function (right, left) {
        return (right + left);
    });
    document.write(" Output is: " + res);

    //Eg.3-
    var arr2 = ['t', 'p', 'i', 'r', 'c', 's', 'a', 'v', 'a', 'j'];
    var res1 = arr2.reduceRight(function (pos1, pos2) {
        return (pos1 + pos2);
    });
    var res2 = arr2.reduce(function (pos1, pos2) {
        return (pos1 + pos2);
    });
    document.write(" The reduceRight() method output is: " + res1 + "<br>");
    document.write("<br> The reduce() method output is: " + res2 + "<br>");
    document.write("<br> <center>The above outputs shows that both method works in different manners<center>");


