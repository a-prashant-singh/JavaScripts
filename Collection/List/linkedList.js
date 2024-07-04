class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node to the end of the list
    add(value) {
        const newNode = new DoublyNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // Remove a node from the list
    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
        } else {
            let current = this.head;
            while (current && current.value !== value) {
                current = current.next;
            }
            if (current) {
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                if (current.prev) {
                    current.prev.next = current.next;
                }
            }
        }
        this.size--;
    }

    // Check if the list contains a value
    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }

    // Print the list from head to tail
    printForward() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }

    // Print the list from tail to head
    printBackward() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.prev;
        }
        console.log(result + 'null');
    }
}

// Usage
const dList = new DoublyLinkedList();
dList.add(1);
dList.add(2);
dList.add(3);
dList.printForward();  // Output: 1 -> 2 -> 3 -> null
dList.printBackward(); // Output: 3 -> 2 -> 1 -> null

console.log(dList.contains(2)); // Output: true
dList.remove(2);
dList.printForward();  // Output: 1 -> 3 -> null

console.log(dList.contains(2)); // Output: false
console.log('Size:', dList.getSize()); // Output: Size: 2
