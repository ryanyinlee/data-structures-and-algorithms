`use strict`;

class Node {
    constructor(value, next = null) {
      this.value = value; //data that's passed it set to data property
      this.next = next; // null by default
    }
  }


class LinkedList {
    constructor() {
      this.head = null; // if there's no element, the list is empty
      this.size = 0;
    } 

    // insert first node
    insertFirst(value) {
        this.head = new Node(value, this.head);
        this.size+=1;

    }

    // insert last node

    insertLast(value) {
        let node = new Node(value);
        let current;
        
        // If empty, then make head

        if(this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;


        }        

        this.size+=1;
    }

    // insert at an index

    insertAtIndex(value, index) {
        // if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        // if first index
        if(index === 0) {
            this.head = new Node(data,this.head);
            return;
        }

        const node = new Node(value);
        let current, previous;

        // set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // node prior
            count+=1;
            current = current.next; // node after
        }

        node.next = current;
        previous.next = node;

        this.size+=1;

    }

    // get at index 
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if(count === index) {
                console.log(current.value);

            }
            count +=1;
            current = current.next;
        }

        return null;
    }

    // remove at index
    removeAt(index) {
        // out of range
        if(index > 0 && index > this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // remove first
        if(index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count+=1;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;


        }

        this.size-=1;
    }

    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // print the list data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAtIndex(500,10);
ll.removeAt(33);
//ll.clearList();
ll.printListData();

//ll.getAt(1);



