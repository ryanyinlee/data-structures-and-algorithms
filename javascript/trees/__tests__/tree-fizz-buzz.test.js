'use strict';

const { BinaryTree, Node,} = require('../tree-fizz-buzz/tree-fizz-buzz.js');

// “Happy Path” - Expected outcome
describe("“Happy Path” - Expected outcome", () => {
    it("Finds the correct maxValue of 11 in an unsorted tree", () => {
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
       
    expect(result).toEqual([2,7, 5, 2, 6, 9, 5, 11, 4]);
    });
  });

// Expected failure
describe("Expected failure", () => {
    it("Expected failure", () => {
        let tree = new BinaryTree();
        let result = tree.breadthFirst();
        expect(result).toEqual(undefined);
    });
  });


// Edge Case (if applicable/obvious)
describe("Edge Case (if applicable/obvious)", () => {
    it("Edge Case (if applicable/obvious)", () => {
        const tree = new BinaryTree();
        let node1 = new Node(-2);
        let node2 = new Node(-7);
        let node3 = new Node(-5);
        let node4 = new Node(-2);
        let node5 = new Node(-6);

        
        tree.root = node1; //2
        tree.root.right = node2; //7
        tree.root.right.right = node3; //5
        tree.root.right.right.right = node4; //2
        tree.root.right.right.right.right = node5; //6
  
        expect(tree.breadthFirst()).toEqual([-2, -7, -5, -2, -6]);
    });
  });
