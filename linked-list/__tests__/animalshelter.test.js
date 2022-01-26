'use strict';

const { AnimalShelter } = require('../animalshelter.js');

// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
describe("Can successfully enqueue into a queue", () => {
    it("Enqueue method should work on queue.", () => {
      let animal = new AnimalShelter();
     

      expect().toEqual();
    });
  });


    // Can successfully dequeue out of a queue the expected value
    describe("Can successfully dequeue out a cat or dog", () => {
        it("Dequeue method should work on AnimalShelter.", () => {
          let animal = new AnimalShelter();
          
   
    
          expect().toEqual();
        });
      });

    // Dequeue not a cat or dog causes exception.
    describe("Dequeue not a cat or dog causes exception.", () => {
        it("Dequeue method should return null when not a cat or dog.", () => {
          let animal = new AnimalShelter();
          
   
    
          expect().toEqual(null);
        });
      });