
var x=Array.of(1,2,3,4,5);
console.log(x);
//By 1) JavaScript array literal
var arr=["parshya","amit","shiv","vidu"];
console.log(arr);

//By 2) JavaScript Array directly (new keyword)
var arr1=new Array();
arr1.push("MP");
arr1.push("UP");
arr1.push("HP");
console.log(arr1);

//By 3) JavaScript array constructor (new keyword)

var emp=new Array("Jai","Vijay","Smith");  
for (let i=0;i<emp.length;i++){  
console.log(emp[i]);  
}  

// Methods of Arrays

//concat()
var mergedArray=arr.concat(arr1);
console.log("Merged Array : "+mergedArray);
//Merged Array : parshya,amit,shiv,vidu,MP,UP,HP

//copywithin()
var copyarry=arr.copyWithin(0,2,3);
console.log(copyarry);
//[ 'shiv', 'amit', 'shiv', 'vidu' ]