
function A()  
{  
}  
A.prototype.display=function()  
{  
  return "A is invoked";  
}  
function B()  
{  
    
}  
  
B.prototype=Object.create(A.prototype);  
  
var a=[new A(), new B()]  
  
a.forEach(function(msg)  
{  
  console.log(msg.display()+"<br>");  
});  