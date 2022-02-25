'use strict';

const { Stack, Queue } = require('../stacksandqs.js');

  // Can successfully push onto a stack
  describe("Can successfully push onto a stack", () => {
    it("Push method should work on stack.", () => {
      let stack = new Stack();
        stack.push('alpha');

      expect(stack).toEqual({"top": {"next": null, "value": "alpha"}});
    });
  });

  // Can successfully push multiple values onto a stack
  describe("Can successfully push multiple values onto a stack", () => {
    it("Push method should work on stack multiple.", () => {
        let stack = new Stack();
        stack.push('alpha');
        stack.push('beta');
        

      expect(stack).toEqual({"top": {"next": {"next": null, "value": "alpha"}, "value": "beta"}});
    });
  });
  // Can successfully pop off the stack
  describe("Can successfully pop off the stack", () => {
    it("Pop method should work on stack and grab first node.", () => {
      let stack = new Stack();
      stack.push('alpha');
      stack.push('beta');
      let pop = stack.pop();

      expect(pop).toEqual('beta');
    });
  });
  // Can successfully empty a stack after multiple pops
  describe("Can successfully empty a stack after multiple pops", () => {
    it("Pop should remove both items.", () => {
        let stack = new Stack();
        stack.push('alpha');
        stack.push('beta');
        stack.pop();
        stack.pop();
  
        expect(stack.isEmpty()).toEqual(true);
    });
  });

  // Can successfully peek the next item on the stack
  describe("Can successfully peek the next item on the stack", () => {
    it("Peek method should work on stack.", () => {
      let stack = new Stack();
      stack.push('alpha');
      stack.push('beta');
      let peek = stack.peek();

      expect(peek).toEqual('beta');
    });
  });


  // Can successfully instantiate an empty stack
  describe("Can successfully instantiate an empty stack", () => {
    it("Push method should work with empty stack.", () => {
      let stack = new Stack();
  

      expect(stack.isEmpty()).toEqual(true);
    });
  });

  // Calling pop or peek on empty stack raises exception
  describe("Calling pop or peek on empty stack raises exception", () => {
    it("Pop or peek method on empty should return null.", () => {
      let stack = new Stack();
      let peek = stack.peek();

      expect(peek).toEqual(null);
    });
  });


// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
  describe("Can successfully enqueue into a queue", () => {
    it("Enqueue method should work on queue.", () => {
      let queue = new Queue();
     queue.enqueue('alpha');
     queue.enqueue('beta');

      expect(queue).toEqual({"back": {"next": null, "value": "beta"}, "front": {"next": {"next": null, "value": "beta"}, "value": "alpha"}});
    });
  });


  // Can successfully dequeue out of a queue the expected value
  describe("Can successfully dequeue out of a queue the expected value", () => {
    it("Dequeue method should work on queue.", () => {
      let queue = new Queue();
      
      queue.enqueue('alpha');
      queue.enqueue('beta');
      queue.dequeue(); // should remove alpha

      expect(queue).toEqual({"back": {"next": null, "value": "beta"}, "front": {"next": null, "value": "beta"}});
    });
  });

  // Can successfully peek into a queue, seeing the expected value
  describe("Can successfully peek into a queue, seeing the expected value", () => {
    it("Peek method should work on queue.", () => {
      let queue = new Queue();
      queue.enqueue('alpha');
      queue.enqueue('beta');
      let peek = queue.peek();

      expect(peek).toEqual('alpha');
    });
  });

  // Can successfully empty a queue after multiple dequeues
  describe("Can successfully empty a queue after multiple dequeues", () => {
    it("Multiple dequeues method should work on queue.", () => {
        let queue = new Queue();
      
        queue.enqueue('alpha');
        queue.enqueue('beta');
        queue.dequeue(); // should remove alpha
        queue.dequeue();

      expect(queue.isEmpty()).toEqual(true);
    });
  });
  // Can successfully instantiate an empty queue
  describe("Can successfully instantiate an empty queue", () => {
    it("Empty queue should work..", () => {
      let queue = new Queue();
  

      expect(queue.isEmpty()).toEqual(true);
    });
  });

  // Calling dequeue or peek on empty queue raises exception
  describe("Calling dequeue or peek on empty queue raises exception", () => {
    it("Peek on empty queue should give false..", () => {
      let queue = new Queue();
      let peek = queue.peek();
  

      expect(peek).toEqual(null);
    });
  });