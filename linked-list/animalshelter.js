"use strict";

const { Stack } = require('./pseudoqueue.js');

// destructuring as exporting an object with 2 properties
class Node {
  constructor(value) {
    this.value = value; //data that's passed it set to data property
    this.next = null; // null by default
  }
}

   
  class AnimalShelter {
    constructor() {
      this.front = new Stack();
      this.back = new Stack();
    }
  
    enqueue(animal) {
      let node = new Node(animal);
  
    //   if (this.front === null) {

        this.front.push(node);
        // this.back = node;

        return;

    //   };
    };

    //dequeue
// Arguments: pref
// pref can be either "dog" or "cat"
// Return: either a dog or a cat, based on preference.
// If pref is not "dog" or "cat" then return null.
  
    dequeue(pref) {    
        if (pref != "dog" && pref != "cat") {
            //console.log('here!*************');
            return null;
        }  
        console.log("this.front.peek() is : " + this.front.peek());
        while (this.front.peek().value.type != pref) {
            // console.log('here!*************');
            let nodeToShift = this.front.pop();   
            
            this.back.push(nodeToShift); 
           };
           
        let pushThis = this.front.pop();
        this.back.push(pushThis);
        // if (pref === "dog" ) {         
               // this.back stack 1,2,3
               // change front to be the next node!
                if (this.back.peek()){
                    if(this.back.peek().value.type === pref){
                        let nodeToRemove = this.back.pop();
                        return nodeToRemove;
                    };                  
                };  
            
        // };

    //     if (pref === "cat") {         
    //         // this.back stack 1,2,3
    //         // change front to be the next node!
    //          if (this.back.peek()){
    //              if(this.back.peek().value.type === "cat"){
    //                  let nodeToRemove = this.back.pop();
    //                  return nodeToRemove;
    //              };                  
    //          };           
    //  };
        return null;
    };



  
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
shelter.enqueue({type: 'dog'}); // first in dog
shelter.enqueue({type: 'cat'}); // first in cat
shelter.enqueue({type: 'dog'});
shelter.enqueue({type: 'cat'}); 
shelter.enqueue({type: 'dog'});
shelter.enqueue({type: 'dog'});
shelter.enqueue({type: 'dog'});
shelter.enqueue({type: 'cat'}); 

console.log(JSON.stringify(shelter));

let returnAnimal = shelter.dequeue('cat');
console.log(JSON.stringify(shelter));

console.log(returnAnimal);






  
  module.exports = {
      AnimalShelter
  };

