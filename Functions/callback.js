function add(x,y,callback){
    console.log(x+y);
    callback(x,y);
}

function mul(a,b)
{
   console.log(a*b);
}

add(4,4,mul);