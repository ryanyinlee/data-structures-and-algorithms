"use strict";

const LinkedList = require('../index.js');

describe("Can successfully instantiate an empty linked list", () => {
    it("Linked list should be empty", () => {
      let list = new LinkedList();
  
      list.add();
      list.add();
      list.add();
      
      expect(list.head.value).toEqual();
    });
  });

describe("The head property will properly point to the first node in the linked list", () => {
    it("Head property will point to first node.", () => {
      let list = new LinkedList();
  
      list.add("first");
      list.add(13);
      list.add(20);
      
      expect(list.head.value).toEqual("first");
    });
  });
  


describe("Can properly insert multiple nodes into the linked list", () => {
    it("Should have should be first as head", () => {
      let list = new LinkedList();
  
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);
      list.add(5);
      expect(list.toString()).toEqual("{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL");
    });
  });

describe("Can properly insert into the linked list", () => {
  it("Should have should be first as head", () => {
    let list = new LinkedList();

    list.add("test");
    list.add(13);
    list.add(20);
    list.insert("should be first");
    expect(list.head.value).toEqual("should be first");
  });
});

describe("Will return true when finding a value within the linked list that exists/does not exist", () => {
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


  describe("Can properly return a collection of all the values that exist in the linked list", () => {
    it("Should have should be first as head", () => {
      let list = new LinkedList();
  
      list.add("a");
      list.add("b");
      list.add("c");
      expect(list.toString()).toEqual("{ a } -> { b } -> { c } -> NULL");
    });
  });