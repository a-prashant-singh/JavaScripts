let pom=new Promise(function (resolve,reject) {
    if(true)
        {
            resolve("Success");
        }
    else
    {
        reject("Rejectd");
    }
}).then(result=>console.log("yes "+result)).catch(result=>console.log("not "+result));

function prom(a,b){
    new Promise((resolve, reject) => {
        var c=a/b;
        if(a,b){
            resolve("I am success.")
        }
        else
        {
            reject("I am rejected.")
        }
    }).then(result=>console.log(result)).catch(result=>console.log(result));

}

//prom(10,0);