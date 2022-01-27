"use strict";

class Node {
  constructor(value) {
    this.value = value; //data that's passed it set to data property
    this.next = null; // null by default
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
      if (this.top){
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        return temp.value;
      }
     return false;

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
  
 

function bracketCheck(data) {

let stack = new Stack();

for (let i = 0; i < data.length; i+=1){
  
  let compare = data[i];

  console.log(compare);

  if (compare === '(' || compare === '[' || compare === '{') {
    stack.push(compare);   
    console.log(JSON.stringify(stack));
    continue;
  }

  if (stack.length === 0){
    return false;
  }

  let checker;

  switch (compare){
    case ')':
        checker = stack.pop();
        if (checker == '{' || checker == '[')
            return false;
        break;

    case '}':
        checker = stack.pop();
        if (checker == '(' || checker == '[')
            return false;
        break;

    case ']':
        checker = stack.pop();
        if (checker == '(' || checker == '{')
            return false;
        break;
    }

    if (checker){
      return true;
    }
    

}

}

  let data = "([{}])"
  let data2 = "([{])"

let returnValue = bracketCheck(data)

  console.log(returnValue);

  let returnValue2 = bracketCheck(data2)

  console.log(returnValue2);

  
  module.exports = bracketCheck;

