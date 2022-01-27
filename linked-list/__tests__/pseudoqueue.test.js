"use strict";

const { PseudoQueue } = require('../pseudoqueue.js');

// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
describe("Can successfully enqueue into a queue", () => {
    it("Enqueue method should work on queue.", () => {
      let queue = new PseudoQueue();
     queue.enqueue('alpha');
     queue.enqueue('beta');
      // should be beta, alpha
      expect(queue.front.top.next.value).toEqual('alpha');
      expect(queue.front.top.value).toEqual('beta');
    });
  });


  // Can successfully instantiate an empty queue
  describe("Can successfully instantiate an empty queue", () => {
    it("Empty queue should work..", () => {
      let queue = new PseudoQueue();
      

      expect(queue.front.peek()).toEqual(null);
      expect(queue.back.peek()).toEqual(null);
    });
  });


 // Can successfully dequeue out of a queue the expected value
  describe("Can successfully dequeue out of a queue the expected value", () => {
    it("Dequeue method should work on queue.", () => {
      let queue = new PseudoQueue();
      
      queue.enqueue('alpha'); // first in first out
      queue.enqueue('beta');
      let returnValue = queue.dequeue(); // should remove alpha

      expect(queue.back.top.value).toEqual('beta');
      expect(returnValue).toEqual('alpha');
    });
  });

    // Calling dequeue or peek on empty queue raises exception
    describe("Calling dequeue or peek on empty queue raises exception", () => {
        it("Peek on empty queue should give false..", () => {
          let queue = new PseudoQueue();
          let dequeue = queue.dequeue();
      
    
          expect(dequeue).toEqual(null);
        });
      });