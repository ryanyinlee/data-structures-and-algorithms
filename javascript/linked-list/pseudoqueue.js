"use strict";

class Node {
  constructor(value) {
    this.value = value; //data that's passed it set to data property
    this.next = null; // null by default
  }
}

// don't have to use both stacks - metty82
// one method is easy
// pseudo queue FIFO
// stacks FILO
class PseudoQueue {
    constructor() {
      this.front = new Stack;
      this.back = new Stack;
    }
    // from metty82
    enqueue(value) {
     let newStack = this.front;
     newStack.push(value);
    }
  
    dequeue() {      
      // queue 1,2,3
      // this.front stack 3,2,1      
      while (this.front.peek()) {
      let nodeToShift = this.front.pop(); // would be 3      
      
      this.back.push(nodeToShift); // take 3 and shift into back stack from front stack
     };
     // this.back stack 1,2,3

      // change front to be the next node!
      if (this.back.peek()){
        let nodeToRemove = this.back.pop();
        return nodeToRemove;
      }      
      return null;
     
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
};

module.exports = {
    Stack,
    PseudoQueue
};

