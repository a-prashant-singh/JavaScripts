//6. Rest and Spread Operators
//The rest operator (...) allows you to represent an indefinite number of arguments as an array, 
//while the spread operator allows you to expand an array into individual elements.

//Rest Operator
function fun(...arg)
{
    console.log(typeof arg);
    console.log(arg.reduce((num1,num2)=>num1+num2));
}

fun(1,2,3,4);
//spred 
//var aa=[1,2,3,4,5,6]
//fun(...aa);

//Spred Operator

var arr1=[1,2,3,4];
var arr2=[...arr1,5,6,7,8,9];
console.log(arr1);
console.log(arr2);

const p={
    id:1,
    team:"A"
};

const person2={
    fname:"parshya",
    ...p
};
console.log(person2);
