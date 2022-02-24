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

};


class BinarySearchTree extends BinaryTree {
    constructor(){
      super();
    }
  
    add(value) {
        let newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if (value < current.value){
                    if (current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
            } else if (value > current.value) {
                if (current.right === null){
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }

    }
}

    contains (value){
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found) {
            if (value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        // if (!found) return false;
        return found;
    }

};

  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(6);
  tree.add(15);
  tree.add(3);
  tree.add(8);
  tree.add(20);

console.log(tree.preOrder());
console.log(tree.inOrder());



module.exports = {
    BinaryTree,
    BinarySearchTree
};