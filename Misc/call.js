let base={
    firstname:"parshya",
    lastname:"singh",
    printNames: function(id){
        console.log(this.firstname+" "+this.lastname+" "+id);
    }

}

let deriverd={
    firstname:"Amit",
    lastname: "rana"
}

function usecall(id)
{
    console.log(this.firstname+" "+this.lastname+" "+id);
 
}

//base.printNames.call(deriverd);
//usecall.call(base);

base.printNames.apply(deriverd,["1"])
usecall.apply(base,["1"])

let use=usecall.bind(deriverd,"5");
use();