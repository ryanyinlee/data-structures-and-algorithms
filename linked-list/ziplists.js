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



}
// merge function must be outside of the linkedlist
function merge(list1, list2) {
    // using 1,3,2 and 5,9,4
    let list1current = list1.head; // head is value: 1
    let list2current = list2.head; // head is value: 5
    let list1next, list2next; // set these as empty placeholders

    while (list1current != null && list2current != null){ // both of these are not null
        // musical chairs

        // must grab head of list 1
        








        list1next = list1current.next;
        list2next = list2current.next;

        list1current.next = list1next;
        list2current.next = list2current;

        list1current = list1next;
        list2current = list2next;
    }

    list1 = list1current;
    return list1;


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

let list3 = merge(list1, list2);

console.log(list3);