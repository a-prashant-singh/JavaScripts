

    var num1=10; num2=5;
    var name1="parshya"; name2="parshya";
    console.log("== is equal to operator: "+(num1==num2));
    console.log("=== Identical (equal and of same type): "+(name1===name2));
    console.log("!=	Not equal to operator: "+(num1!=num2));
    console.log("!== Not Identical operator: "+(num1!==num2));
    console.log(">	Greater than operator: "+(num1>num2));
    console.log(">=	Greater than or equal to operator: "+(num1>=num2));
    console.log("<	Less than operator: "+(num1<num2));
    console.log("<=	Less than or equal to operator: "+(num1<=num2));

    //By 1) JavaScript Object by object literal
    var product={
        id:1,
        name:"Parshya Singh",
        ispresent: true
    };

    console.log(product);
    console.log(product.id);
    console.log(product['name']);

    //By 2) By creating instance of Object
    var myObject=new Object();

    //By 3) By using an Object constructor
    function emp(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    e=new emp(1,"Parshya",8999);
    console.log(e);
    
