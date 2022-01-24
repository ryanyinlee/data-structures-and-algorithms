"use strict";

const LinkedList = require('../ziplists.js');

// “Happy Path” - Expected outcome
describe("“Happy Path” - Expected outcome", () => {
    it("Linked lists should combine.", () => {
      let list = new LinkedList();
  
      list.add();
      list.add();
      list.add();
      
      expect(list.head.value).toEqual();
    });
  });

// Expected failure
describe("Expected failure", () => {
    it("Linked list should not combine.", () => {
      let list = new LinkedList();
  
      list.add();
      list.add();
      list.add();
      
      expect(list.head.value).toEqual();
    });
  });

// Edge Case (if applicable/obvious)
describe("Edge Case (if applicable/obvious)", () => {
    it("Linked lists are different lengths.", () => {
      let list = new LinkedList();
  
      list.add();
      list.add();
      list.add();
      
      expect(list.head.value).toEqual();
    });
  });