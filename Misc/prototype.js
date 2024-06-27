var p={
    iname:"parshay   "
}

String.prototype.trueLength=function (){
 
    console.log(`True length is ${this.trim().length}`);
}
console.log("parshya    ".length);
"parshya    ".trueLength();


export function createUser(username,score)
{
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function()
{
    this.score++;
    console.log(this.score+" "+this.username);
}

const a=new createUser("amit",10);
var user1=new createUser("parshya",20);

a.increment();
user1.increment();
new createUser("don",1000).increment();
