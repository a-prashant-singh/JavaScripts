class Stack{
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
    this.array.pop()
   }
   peek(){
    return this.array[this.array.length-1]
   }
   display()
   {
    console.log(this.array)
   }

}
let stack=new Stack()
stack.append(10)
stack.append(20)
// stack.pop();
stack.display()
console.log(stack.peek());
console.log(stack)

