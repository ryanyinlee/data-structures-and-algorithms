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
    it("Multiple nodes can be added.", () => {
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
  it("Insert function should work.", () => {
    let list = new LinkedList();

    list.add("test");
    list.add(13);
    list.add(20);
    list.insert("should be first");
    expect(list.head.value).toEqual("should be first");
  });
});

describe("Will return true when finding a value within the linked list that exists/does not exist", () => {
    it("should be able to find a value in the list and return true or false if it exists or not", () => {
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


  describe("Can successfully add a node to the end of the linked list", () => {
    it("Should have d added to end using append.", () => {
      let list = new LinkedList();
  
      list.add("a");
      list.add("b");
      list.add("c");
      list.append('d');
          
      expect(list.toString()).toEqual("{ a } -> { b } -> { c } -> { d } -> NULL");
    });
  });


describe("Can successfully add multiple nodes to the end of a linked list", () => {
  it("Should have d and e using append.", () => {
    let list = new LinkedList();

    list.add("a");
    list.add("b");
    list.add("c");
    list.append('d');
    list.append('e');
    expect(list.toString()).toEqual("{ a } -> { b } -> { c } -> { d } -> { e } -> NULL");
  });
});


describe(" Can successfully insert a node before a node located in the middle of a linked list", () => {
  it("Should have 100 inserted before 1 using insertBefore.", () => {
    let list = new LinkedList();

    list.add(1);
    list.add(2);
    list.insertBefore(2, 100);
    list.add(3);
    console.log(JSON.stringify(list));
    expect(list.toString()).toEqual("{ 1 } -> { 100 } -> { 2 } -> { 3 } -> NULL");
  });
});

describe("Can successfully insert a node before the first node of a linked list", () => {
  it("Should have insertBefore function at the front.", () => {
    let list = new LinkedList();

    list.add(1);
    list.insertBefore(100);
    list.add(2);    
    list.add(3);
    console.log(JSON.stringify(list));
    expect(list.toString()).toEqual("{ 100 } -> { 1 } -> { 2 } -> { 3 } -> NULL");
  });
});

describe("Can successfully insert after a node in the middle of the linked list", () => {
  it("Should have insertAFter work in the middle.", () => {
    let list = new LinkedList();

    list.add("a");
    list.add("b");
    list.insertAfter("b", "after")
    list.add("c");
    expect(list.toString()).toEqual("{ a } -> { b } -> { after } -> { c } -> NULL");
  });
});

describe("Can successfully insert a node after the last node of the linked list", () => {
  it("Should have should be first as head", () => {
    let list = new LinkedList();

    list.add("a");
    list.add("b");
    list.add("c");
    list.insertAfter("c", "after");
    expect(list.toString()).toEqual("{ a } -> { b } -> { c } -> { after } -> NULL");
  });
});