'use strict';

class Node {
    constructor(value) {
      this.value = value; //data that's passed it set to data property
      this.next = null; // null by default
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
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


      values() {
          let values = [];
          let current = this.head;
          while(current){
              values.push(current.value);
              current = current.next;
          }
          return values;
      }
}

module.exports = LinkedList