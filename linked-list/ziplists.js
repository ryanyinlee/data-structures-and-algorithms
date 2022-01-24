"use strict";

class Node {
  constructor(value) {
    this.value = value; //data that's passed it set to data property
    this.next = null; // null by default
  }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    add(value) {
        let newNode = new Node(value);
    
        if (this.head === null) {
          this.head = newNode;
          return;
        }
    
        let currentNode = this.head;
    
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
    
        currentNode.next = newNode;
        this.size+=1;
      }

      toString() {
        let currentNode = this.head;
        let returnString = "";
    
        while (currentNode) {
          returnString += "{ " + currentNode.value + " } -> ";
          currentNode = currentNode.next;
        }
    
        returnString += "NULL";
    
        return returnString;
      }

        // merge function must be outside of the linkedlist?
        // maybe not
        // realize it will be easier to just return list1 rather than make a new list
        // help with logic from daniel-jacks
    merge(list1, list2) {
    // using 1,3,2 and 5,9,4
    let list1current = list1.head; // head is value: 1
    let list2current = list2.head; // head is value: 5
    let list1holder, list2holder; // set these as empty placeholders

    while (list1current != null && list2current != null){ // both of these are not null
        // musical chairs

        //list1holder grabs list1current.next which is 3
        list1holder = list1current.next;

        // we can now change list1current.next to what list2current's head was: 5
        list1current.next = list2current; 
        // list1current is list1.head, which is 1. Now list1current is 3.
        list1current = list1holder; 
        // set empty list2holder to list2current.next which is: 9
        list2holder = list2current.next;
        // set list2current.next which was 9, to list1current which is 3;
        list2current.next = list1current;
        // setlist2current, which is list2.head, or 5, to: 9.
        list2current = list2holder;

    
    }

    
    return list1;


}

}


let list1 = new LinkedList();
let list2 = new LinkedList();

list1.add(1);
list1.add(3);
list1.add(2);

console.log(JSON.stringify(list1));

list2.add(5);
list2.add(9);
list2.add(4);

console.log(JSON.stringify(list2));

let list3 = new LinkedList();
let returnList = list3.merge(list1, list2);

console.log(JSON.stringify(returnList));


module.exports = LinkedList;