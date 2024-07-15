class LinkedList{
    constructor(data)
    {
        this.head={
            value:data,
            next:null
        },
        this.tail=this.head,
        this.length=1
    }

    append(data)
    {
        let newNode={
            value:data,
            next:null
        }
        this.tail.next=newNode,
        this.tail=newNode,
        this.length++
    }
    prepend(data)
    {
        let newNode={
            value:data,
            next:this.head
        }
        this.head=newNode
        this.length++
    }
    getPosition(data)
    {
        let index=0;
        let nodeValue=this.head.value;
        let nodeNext=this.head.next;
        for(let i=0;i<1;i++)
        {
            if(nodeValue!=data)
            {
                nodeValue=nodeNext.value
                nodeNext=nodeNext.next
                // console.log(`${nodeValue} ${nodeNext}`)
                index++
            }
            else
            {
                return index
            }
                     
        }
        return index
    }

    traverse(req)
    {
         let counter=0;
        let currentNode=this.head
        while(counter<req)
        {
            counter++
            currentNode=currentNode.next
        }
        return currentNode
    }
    insertAt(index,data)
    {
           const newNode={
            value:data,
            next:null
           }
        let leaderNode=this.traverse(index-1)
        const nextNode=leaderNode.next
        leaderNode.next=newNode
        newNode.next=nextNode
           this.length++
    }
    remove(index)
    {
     
        if(index>0)
        {
            let leaderNode=this.traverse(index-1)

        const unwantedNode=leaderNode.next
        const newNode=unwantedNode.next
        leaderNode.next=newNode
        if(index+1==this.length)
        {
            this.tail=this.traverse(index-1)
        }
        }
        
        else{
            const newNode=this.traverse(index+1)
            this.head=newNode
        }
        this.length--
    }
    reverse()
    {
      let first=this.head
      this.tail=this.head
      let second=first.next
      console.log(second)
      while(second)
      {
     let temp=second.next
     console.log(temp)
        second.next=first
        console.log(second.next)

        first=second
        console.log(first)

        second=temp
        console.log(second)


      }
      this.head.next=null
      this.head=first
    }

}

let list=new LinkedList(10);

list.append(16);
list.append(19);
list.prepend(12);
list.remove(3)
console.log(list)

    