"use strict";

const LinkedList = require('../ziplists.js');

// “Happy Path” - Expected outcome
describe("“Happy Path” - Expected outcome", () => {
    it("Linked lists should combine.", () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        
        list1.add(1);
        list1.add(3);
        list1.add(2);
        
        list2.add(5);
        list2.add(9);
        list2.add(4);

        let list3 = new LinkedList();
        let returnList = list3.merge(list1, list2);
        expect(returnList.toString()).toEqual("{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL");
    });
  });

// Expected failure
describe("Expected failure", () => {
    it("Linked list should not combine.", () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        
        list1.add(1);
        list1.add(3);
        list1.add(2);
        let list3 = new LinkedList();
        let returnList = list3.merge(list1, list2);
        
        
      
        expect(returnList.toString()).toEqual("{ 1 } -> { 3 } -> { 2 } -> NULL");
    });
  });

// Edge Case (if applicable/obvious)
describe("Edge Case (if applicable/obvious)", () => {
    it("Linked lists are different lengths.", () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        
        list1.add(1);
        list1.add(3);
        list1.add(2);
        list1.add(7);
        
        list2.add(5);
        list2.add(9);
        list2.add(4);
        


        let list3 = new LinkedList();
        let returnList = list3.merge(list1, list2);
        expect(returnList.toString()).toEqual("{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { 7 } -> NULL");
    });
  });