
async function fetchdata(url)
{
    try
    {
    let resp= await fetch(url);
    let data=await resp.json();
    console.log(data);
    }
    catch(err)
    {
    console.log(err);
    }
}

fetchdata("https://jsonplaceholder.typicode.com/users");