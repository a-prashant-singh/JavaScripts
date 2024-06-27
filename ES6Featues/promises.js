
//10. Promises
//Promises provide a way to handle asynchronous operations more easily, avoiding callback hell.

var cal=()=>
    {
       return new Promise((resolve,reject)=>
            {
                setTimeout(()=>resolve("calculation is done."),2000);
            }
        );
    };
    cal().then(
        data=>{console.log(data);}
    ).catch(
        error=>{console.log(error);}
    )
    
    let f=new Promise((resolve,reject)=>
        {
            if(true)
                {
                    resolve("erds")
                }
                else
                {
                    console.log(reject);
                }
        });
        f.then(data=>console.log(data)).catch(error=>console.log(error));
    
    
        function poms()
        {
            new Promise((resolve,reject)=>
                {
                    if(false)
                        {
                            resolve("poms")
                        }
                        else
                        {
                            reject("Not poms")
                        }
                }).then(data=>console.log(data)).catch(error=>console.log(error))
        }
        poms();
        //poms().then(data=>console.log(data)).catch(error=>console.log(error));
    
    