"use strict";

const LinkedList = require('../index.js');

//Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list

// Can properly return a collection of all the values that exist in the linked list

describe("testing linked list", () => {
  it("should have should be first as head", () => {
    let list = new LinkedList();

    list.add("test");
    list.add(13);
    list.add(20);
    list.insert("should be first");
    expect(list.head.value).toEqual("should be first");
  });
});

// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
describe("testing linked list", () => {
    it("should be able to find a value in the list", () => {
      let list = new LinkedList();
  
      list.add("test");
      list.add(13);
      list.add(20);     

      let isTrue = list.includes(13);
      let isFalse = list.includes(14);
        
      expect(isTrue).toEqual(true);
      expect(isFalse).toEqual(false);
    });
  });

  describe("testing linked list", () => {
    it("should be able to find a value in the list", () => {
      let list = new LinkedList();
  
      list.add("test");
      list.add(13);
      list.add(20);     

      let isTrue = list.includes(13);
      let isFalse = list.includes(14);
        
      expect(isTrue).toEqual(true);
      expect(isFalse).toEqual(false);
    });
  });
