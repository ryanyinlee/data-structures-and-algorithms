'use strict';

const LinkedList = require ('./linkedlist');
const {BinarySearchTree} = require ('./trees');


class Hashtable {
    constructor (size){
        this.size = size;
        this.buckets = new Array(size);
    }

set (key, value) {
    let position = this.hash(key);
    let payload = `${key}:${value}`;
    if (this.buckets[position]) {        
        let bucket = this.buckets[position];
        bucket.add(payload);        
    }  else {
        let bucket = new LinkedList();
        bucket.add(payload);
        this.buckets[position] = bucket;
    }
}

get(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      let list = this.buckets[position];
      let currentNode = list.head;
      let [keyFromList, value] = currentNode.value.split(':');
      if (keyFromList === key) {
        return value;
      }
    } else {
        return null;
    }
}

contains(key){
let keyIn = this.hash(key);

if(this.buckets[keyIn]) {
    return true; // return true if key
} else {
    return false; // else return false
}
}

keys() {
    let keyArray = [];
    for (let i = 0; i < this.buckets.length; i+=1){
        if(this.buckets[i]){
            for(let j = 0; j < this.buckets[i].length; j+=1){
                if(!keyArray.includes(this.buckets[i][j][0])){
                    keyArray.push(this.buckets[i][j][0])
                }
            }
        }
    }
    return keyArray;
}

hash(key){      
    let chars = key.split('');
    let sum = chars.reduce((state, char) => {
        return state + char.charCodeAt(0);
    }, 0);
    let initialHash = sum * 599;
    return initialHash % 1024;
    }

}

function  repeatedNums(string){
    let stringTable = new Hashtable(string.length);
    let common = [];
    
    for (let i = 0; i < string.length; i+=1){
        if(stringTable.contains(string[i])){
            common.push(string[i]);
        }
        stringTable.set(string[i]);
    }
  
    return common;
}

function treeIntersection (bst1, bst2){

    let bst1Order = bst1.inOrder().join(" ");
    console.log("bst1 ", bst1Order);
    let bst2Order = bst2.inOrder().join(" ");

 
    let squished = bst1Order.concat(bst2Order);
    console.log("squished ", squished);

    let returnArray = repeatedNums(squished);

    return returnArray;

}

// function treeIntersection (bst1, bst2) {

// let treeHash = new Hashtable(100);
// let returnValues = [];

// hashTrees(bst1.root, treeHash);
// checkCommon(bst2.root, treeHash, returnValues);

// return returnValues;


// }

// function hashTrees(node, hashTree){
//     if (node === null) {
//         console.log("node was null");
//         return;
//     }
//     hashTree.set(node.value.toString(), 1);
//     if (node.left) {
//         hashTrees(node.left, hashTree);
//     }

//     if (node.right) {
//         hashTrees(node.right, hashTree);
//     }

// }

// function checkCommon(nodeToCheck, hashMap, array){
//     let checkBool = hashMap.get(nodeToCheck.value.toString());
//     if(checkBool === true) {
//         array.push(nodeToCheck.value);
//     }
//     if (nodeToCheck.left) {
//         checkCommon(nodeToCheck.left, hashMap, array);
//     }

//     if (nodeToCheck.right) {
//         checkCommon(nodeToCheck.right, hashMap, array);
//     }
    
// }

module.exports = treeIntersection;

const tree = new BinarySearchTree();
tree.add(150);
tree.add(100);
tree.add(75);
tree.add(160);
tree.add(125);
tree.add(175);
tree.add(250);
tree.add(200);
tree.add(350);
tree.add(300);
tree.add(500);



const tree2 = new BinarySearchTree();
tree2.add(42);
tree2.add(100);
tree2.add(15);
tree2.add(160);
tree2.add(125);
tree2.add(175);
tree2.add(600);
tree2.add(200);
tree2.add(350);
tree2.add(4);
tree2.add(500);



let result = treeIntersection (tree, tree2);

console.log(result);

