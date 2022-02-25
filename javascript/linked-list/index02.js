'use-strict';

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

//1, 2, 3, 4, 5 
// remove 3
// 3.next = 4;
// set 2.next = 4 to remove 3
function removeAllInstances(value, linkedList) {
    let currentNode = linkedList.head;
    let nextNode = linkedList.head.next;

    while (currentNode) {
        console.log(nextNode.value, value);
        if (nextNode.value === value) {
            console.log(currentNode.value, nextNode.value);
            currentNode.next = nextNode.next;
        }
        currentNode = currentNode.next;
        nextNode = nextNode.next;
    };
    
    return linkedList;    

};

module.exports = removeAllInstances;

// very common method/pattern of traversing linked list
// also common for binary trees (going down two paths)
// enter a recursive function 