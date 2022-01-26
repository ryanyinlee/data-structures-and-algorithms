"use strict";

class Node {
  constructor(value) {
    this.value = value; //data that's passed it set to data property
    this.next = null; // null by default
  }
}

   
  class AnimalShelter {
    constructor() {
      this.front = null;
      this.back = null;
    }
  
    enqueue(animal) {
      let node = new Node(animal);
  
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
  
    dequeue(pref) {
    
        if (pref != "dog" || pref != "cat") {
            return null;
        }  
        if (pref === "dog") {


        }
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
  
    // return the value at the front of the queue
    peek() {
        if (this.front == null){
            return null;
        } else {
            return this.front.value;
        }
    }
  
    // returns a boolean whether or not the Queue is empty
    isEmpty() {
        if (this.front == null) {
            return true;
        } else {
            return false;
        }
    }
  }



  let shelter = new AnimalShelter();
shelter.enqueue('dog');
shelter.enqueue('cat');







  
  module.exports = {
      AnimalShelter
  };

