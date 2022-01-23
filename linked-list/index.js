"use strict";

class Node {
  constructor(value) {
    this.value = value; //data that's passed it set to data property
    this.next = null; // null by default
  }
}
// https://www.youtube.com/watch?v=ZBdE8DElQQU Linked List Data Structure | JavaScript from Traversy Media

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(value) {
    let newNode = new Node(value);
    this.head= newNode;
    
    this.size+=1;
    return;
}

  add(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.size+=1;
  }

  // Arguments: value
  // Returns: nothing
  // Adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.size+=1;
  }

//   insert before
// arguments: value, new value
// adds a new node with the given new value immediately before the first node that has the value specified
// taken from class 07 whiteboard warmup done by Daniel.
insertBefore (value, newValue) {
let node = new Node(newValue);
let currentNode = this.head
let lastValue;
while (currentNode) {

    if(currentNode.value === value){
        node.next = currentNode;
        lastValue.next = node;
        return;
    }
    lastValue = currentNode;
    currentNode = currentNode.next;
}
this.size+=1;
}

// insert after
// arguments: value, new value
// adds a new node with the given new value immediately after the first node that has the value specified
// reversed from class 07 whiteboard warmup done by Daniel.
insertAfter (value, newValue) {
  let node = new Node(newValue);
  let currentNode = this.head;
  while (currentNode) {
      if(currentNode.value === value){
          
          let valueAfter = currentNode.next;
          currentNode.next = node;
          node.next = valueAfter;
          return;
      }
      
      currentNode = currentNode.next;
  }
  this.size+=1;
  }


// append
// arguments: new value
// adds a new node with the given value to the end of the list
// from traversy youtube video
append(value) {
    let newNode = new Node(value);
    let current;
    
    if (this.head===null) {
        this.head = newNode;
    } else {
      current = this.head;
      
      while(current.next) {
        current = current.next;
      }      
      current.next = newNode;
    }    
    this.size+=1;
    
}

  // Arguments: value
  // Returns: Boolean
  // Indicates whether that value exists as a Node’s value somewhere within the list.
  includes(value) {
    let test;
    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.value === value) {
        test = true;
      } else {
        test = false;
      }
      currentNode = currentNode.next;
    }
    this.size+=1;
    return test;
  }

  // to string
  // Arguments: none
  // Returns: a string representing all the values in the Linked List, formatted as:
  // "{ a } -> { b } -> { c } -> NULL"

  toString() {
    let currentNode = this.head;
    let returnString = "";

    while (currentNode) {
      returnString += "{ " + currentNode.value + " } -> ";
      currentNode = currentNode.next;
    }

    returnString += "NULL";

    return returnString;
  }

//   kth from end
// argument: a number, k, as a parameter.
// Return the node’s value that is k places from the tail of the linked list.
// You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
findAtKth(index) {
  // get the kth number
    let kth = this.size - index;

    let current = this.head;
    let count = 0;

    while (current) {
        if(count == kth) {
          console.log("kth should be: " + current.value);
          return current.value;
        }
        count +=1;
        current = current.next;
    }

    return null;
}


  printListData() {
    let current = this.head;

    while(current) {
        console.log(current.value);
        current = current.next;
    }
}
}

let list = new LinkedList();


// manual testing
list.insert("should be first");

list.add(13);
list.insertBefore(13, 100);
list.add(20);

list.add(23);




list.append("should be last");

// let isTrue = list.includes(13);
// console.log(isTrue);

// let isFalse = list.includes(14);
// console.log(isFalse);

//console.log(list.toString());
//console.log(JSON.stringify(list));
list.findAtKth(0);
list.printListData();
module.exports = LinkedList;
