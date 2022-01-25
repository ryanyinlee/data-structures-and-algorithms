"use strict";

class Node {
  constructor(value) {
    this.value = value; //data that's passed it set to data property
    this.next = null; // null by default
  }
}


class PseudoQueue {
    constructor() {
      this.front = new Stack;
      this.back = new Stack;
    }
    
    enqueue(value) {
      //let node = new Node(value);
  
      if (this.front === null) {
        this.front = node;
        this.back = node;
        return;
      } else {
        this.back.next = node;
        this.back = node;
        // let temp = this.back;
        return;
      }
    }
  
    dequeue() {
  
      let nodeToRemove = this.front;
  
      // change front to be the next node!
      this.front = nodeToRemove.next;
  
      // get rid of the next value from our nodeToRemove
      nodeToRemove.next = null;
  
      // if this is true, there are no nodes after the front.
      if (!this.front) {
        this.back = null;
      }
  
      return nodeToRemove.value;
    }
  
  }

  class Stack {
    constructor() {
      this.top = null;
    }
  
    push(value) {
  
      let node = new Node(value);
  
      // check if the stack is empty
      if (this.top === null) {
        // then make it the top of the stack;
        this.top = node;
        return;
      } else {
        // set node next = this.top;
        node.next = this.top;
        
        // set top = new Node()
        this.top = node; 
      }
    }
  
    // remove the top node
    pop() {
  
      // grab the first node
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp.value;
    }

    //peek
// Arguments: none
// Returns: Value of the node located at the top of the stack
// Should raise exception when called on empty stack

peek() {
    if (this.top == null) {
        return null;
    } else {
        return this.top.value;
    }

}

// is empty
// Arguments: none
// Returns: Boolean indicating whether or not the stack is empty.
isEmpty() {
    if (this.top == null) {
        return true;
    } else {
        return false;
    }

}

}

module.exports = {
    Stack,
    PseudoQueue
};

