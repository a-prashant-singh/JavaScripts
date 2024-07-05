
//var add = function(x, y) {
//    return x + y;
//  };
// ES6
  let add = (x, y) => {return x + y};
  //we can remove return also if there is only one statement
  //  let add = (x, y) => {  x + y };
  //also we can remove paraenthesis
 //  let add = (x, y) =>   x + y ;

 let me = { 
 name: "Ashutosh Verma", 
  thisInArrow:() => { 
  // console.log("My name is " + this.name); // no 'this' binding here 
  }, 
  thisInRegular(){ 
  console.log("My name is " + this.name); // 'this' binding works here 
  } 
};
me.thisInArrow(); 
me.thisInRegular();


let mul1=function multiply(x,y)
{
    console.log(x*y);
}
new mul1(2,3);

//Regular functions created using function declarations or expressions are constructible and
//callable. Since regular functions are constructible, they can be called using the new keyword
let mul = (x, y) => console.log(x * y);
mul(2,3);
//However, the arrow functions are only callable and not constructible, i.e arrow functions can 
//never be used as constructor functions. Hence, they can never be invoked with the new keyword.

//It means that the following is valid JavaScript:

// function sub(x, x){}
//It is not, however, when using strict mode:

// 'use strict';
// function sub1(x, x){}
// SyntaxError: duplicate formal argument x
                                                                                                                                 
//this binding does't work in arrow function

//hoisting is not  posible in arrow function

//Arrow functions do not have their own arguments object. 
//They inherit arguments from the surrounding non-arrow function

//arrow function cannot be instantiate with new keyword
//Cannot be used as constructors and will throw an error if used with new.

//The super keyword is not available in arrow functions.

