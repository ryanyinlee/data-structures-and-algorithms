
'use strict';

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

    
    
    add (value) {
        let newNode = new Node(value);
        
        if (this.head===null){
            this.head = newNode;
            return;
        }
        
        let currentNode = this.head;

        while(currentNode.next){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    
    }

    // Arguments: value
// Returns: nothing
// Adds a new node with that value to the head of the list with an O(1) Time performance.
insert (value) {
    let newNode = new Node(value);
    this.head = newNode;
}

    // Arguments: value
// Returns: Boolean
// Indicates whether that value exists as a Node’s value somewhere within the list.
    includes (value){

        
    let test;
    let currentNode = this.head;

    while(currentNode.next){
        if (currentNode.value === value) {
            test = true;
        } else {test = false};
        currentNode = currentNode.next;
    }

    return test;
}

// to string
// Arguments: none
// Returns: a string representing all the values in the Linked List, formatted as:
// "{ a } -> { b } -> { c } -> NULL"

    toString() {
        let currentNode = this.head;
        let returnString = '';

        while(currentNode) {
            returnString += '{ ' + currentNode.value + ' } ->'
            currentNode = currentNode.next;
        }

        returnString += 'null';

        return returnString = '';
    }

}




let list = new LinkedList();
console.log(list.toString());
list.insert('should be first');
list.add('test');
list.add(13);
list.add(20);

let isTrue = list.includes(13);
console.log(isTrue);

let isFalse = list.includes(14);
console.log(isFalse);



console.log(JSON.stringify(list));

module.exports = LinkedList;
