"use strict";

class Node {
  constructor(value) {
    this.value = value; 
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  preOrder() {
    let data = [];
    var current = this.root;
    function traverse (node) {
        data.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
    };


    inOrder() {
        let data = [];
        var current = this.root;
        function traverse (node) {            
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
        };

        postOrder() {
            let data = [];
            var current = this.root;
            function traverse (node) {            
                if (node.left) traverse(node.left);                
                if (node.right) traverse(node.right);
                data.push(node.value);
            }
            traverse(current);
            return data;
            };

            maxValue() {
                let maxValue;
                var current = this.root;
                function traverse (node) {    
                    if (current===null){
                        return maxValue = null;
                    }
                    if (!maxValue) {
                        maxValue = node.value;
                    }
                    if (maxValue <= node.value){
                        maxValue = node.value;
                    }        
                    if (node.left) traverse(node.left);                
                    if (node.right) traverse(node.right);
                    
                }
                traverse(current);
                return maxValue;
                };

                breadthFirst() {
                    let node = this.root;
                    let data = [];
                    let queue = [];
                    if(node === null) return undefined;
                    queue.push(node);
                    while (queue.length) {
                        node = queue.shift();
                        data.push(node.value);
                        if(node.left) queue.push(node.left);
                        if(node.right) queue.push(node.right);
                    }

                 return data;
                }

};


// This is the example tree from the lab

const tree = new BinaryTree();
let node1 = new Node(2);
let node2 = new Node(7);
let node3 = new Node(5);
let node4 = new Node(2);
let node5 = new Node(6);
let node6 = new Node(5);
let node7 = new Node(11);
let node8 = new Node(9);
let node9 = new Node(4);

tree.root = node1; //2
tree.root.left = node2; //7
tree.root.right = node3; //5
tree.root.left.left = node4; //2
tree.root.left.right = node5; //6
tree.root.left.right.left = node6 //5
tree.root.left.right.right = node7 //11
tree.root.right.right = node8; //9
tree.root.right.right.left = node9; //4

let result = tree.breadthFirst();

console.log(result);

module.exports = {
    BinaryTree,
    Node
};