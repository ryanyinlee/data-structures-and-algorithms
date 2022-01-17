
'use strict'

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // take in a value and add it to our linked list

    // efficiency:
    // time 0(n) - linear time efficiency
    // space 0(1) - constant space efficiency

    append(value) {
        // empty linked list {head: null}
        let node = new Node(value);
        if(this.head === null) {
            this.head = node;
            return;
        }
        
        let currentNode = this.head;

        // traversal of a linked list. important!

        while (currentNode) {
            currentNode = currentNode.next;
        }
        
        // have reached the end when we are out of the loop

    }
}

let list = new LinkedList();

// let node = new Node(value);

// let node2 = new Node(13);
// let node3 = new Node(20);
// let node4 = new Node(33);

// list.head = node;
// list.head.next = node2;
// list.head.next.next = node3;
// list.head.next.next.next = node4;

console.log(JSON.stringify(list));
list.add('Jacob');
list.add()