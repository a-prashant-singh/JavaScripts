class Queue{
    constructor()
    {
        this.array=[];

    }
   append(data)
   {
    this.array.push(data)
   }
   pop()
   {
    this.array.shift()
   }
   peek(){
    return this.array[0]
   }
   display()
   {
    console.log(this.array)
   }

}
let q=new Queue()
q.append(10)
q.append(20)
// q.pop();
q.display()
console.log(q.peek());
console.log(q)

