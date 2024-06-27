function getData()
{
    return new Promise((resolve,reject)=>
    {
      
      if(resolve){
        setTimeout(()=>
            {
                resolve("Data fetch success.");

                console.log("accepted. ")
            } ,2000)
      }  
      else
      {
        reject("rejected.")
      }
    }
    )
}

getData().then(data=>console.log(data)).catch(error=>console.log(error));
