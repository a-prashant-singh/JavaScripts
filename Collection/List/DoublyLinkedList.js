class DoublyLinkedList{
    constructor(data)
    {
        this.head={
            prev:null,
            value:data,
            next:null
        },
        this.tail=this.head,
        this.length=1
    }

    append(data)
    {
        let newNode={
            prev:null,
            value:data,
            next:null
        }
        this.tail.next=newNode,
        newNode.prev=this.tail.value
        this.tail=newNode,
        this.length++
    }
    prepend(data)
    {
        let newNode={
            prev:null,
            value:data,
            next:this.head
        }
        this.head.prev=newNode.value
        this.head=newNode
        this.length++
    }
    getPosition(data)
    {
        let index=0;
        let nodeValue=this.head.value;
        let nodeNext=this.head.next;
        for(let i=0;i<this.length;i++)
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
            prev:null,
            value:data,
            next:null
           }
        let leaderNode=this.traverse(index-1)
newNode.prev=leaderNode.value
        const nextNode=leaderNode.next
        nextNode.prev=newNode.value
        leaderNode.next=newNode
        newNode.next=nextNode
    
           this.length++
    }
    remove(index)
    {
        if(index==0)
        {
            let leaderNode=this.traverse(index+1)
            leaderNode.prev=null
            this.head=leaderNode
        }
              
        if(index>0 && index+1<this.length){
        let leaderNode=this.traverse(index-1)
        const unwantedNode=leaderNode.next
        const newNode=unwantedNode.next
        newNode.prev=leaderNode.value
        leaderNode.next=newNode
        }
        if(index+1==this.length){
            let secondLastNode=this.traverse(index-1)
            secondLastNode.next=null
            this.tail=secondLastNode
        }
        this.length--
    }
    // reverse()
    // {
    //     let currentNode = this.head;
    //     let temp = null;

    //     // Swap next and prev pointers for all nodes
    //     while (currentNode) {
    //         temp = currentNode.prev;
    //         currentNode.prev = currentNode.next;
    //         currentNode.next = temp;
    //         currentNode = currentNode.prev;
    //     }

    //     // Swap head and tail
    //     if (temp) {
    //         this.head = temp.prev;
    //     }

    //     // Swap head and tail pointers
    //     let tempNode = this.head;
    //     this.head = this.tail;
    //     this.tail = tempNode;
    // }

}

let list=new DoublyLinkedList(10);

list.append(22)
list.prepend(33)
list.insertAt(1,44)
// list.remove(3)
// list.reverse()
console.log(list);
// console.log(list.getPosition(10))
// console.log(list.traverse(1))
// console.log(list);
console.log("==============================================");
let i=0

while(i<list.length)
{
    console.log(list.traverse(i))
    i++
}



    