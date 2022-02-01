'use strict';

const { BinaryTree, BinarySearchTree} = require('../binarysearchtrees/trees');


// Can successfully instantiate an empty tree
describe("Can successfully instantiate an empty tree", () => {
    it("Can successfully instantiate an empty tree", () => {
        let tree = new BinarySearchTree();
       
        expect(tree.root).toEqual(null);
    });
  });

// Can successfully instantiate a tree with a single root node
describe("Can successfully instantiate a tree with a single root node", () => {
    it("Can successfully instantiate a tree with a single root node", () => {
         const tree = new BinarySearchTree();

         tree.add(13);


       expect(tree.root.value).toEqual(13);
    });
  });

// Can successfully return a collection from a preorder traversal
describe("Can successfully return a collection from a preorder traversal", () => {
    it("Can successfully return a collection from a preorder traversal", () => {
        const tree = new BinarySearchTree();
        tree.add(13);
        tree.add(12);
        tree.add(11);
        tree.add(14);

         
        expect(tree.preOrder()).toEqual([ 13, 12, 11, 14 ]);
    });
  });

// Can successfully return a collection from an inorder traversal
describe("Can successfully return a collection from an inorder traversal", () => {
    it("Can successfully return a collection from an inorder traversal", () => {
        const tree = new BinarySearchTree();
        tree.add(13);
        tree.add(12);
        tree.add(11);
        tree.add(14);

        console.log(tree.inOrder())

        expect(tree.inOrder()).toEqual([ 11, 12, 13, 14 ]);
    });
  });

// Can successfully return a collection from a postorder traversal
describe("Can successfully return a collection from a postorder traversal", () => {
    it("Can successfully return a collection from a postorder traversal", () => {
        const tree = new BinarySearchTree();
        tree.add(13);
        tree.add(12);
        tree.add(11);
        tree.add(14);

        console.log(tree.postOrder())

        expect(tree.postOrder()).toEqual([ 11, 12, 14, 13 ]);
    });
  });

// For a Binary Search Tree, can successfully add a left child and right child properly to a node
describe("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
    it("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
        const tree = new BinarySearchTree();
        tree.add(13);
        tree.add(12);
        tree.add(14);

        expect(tree.root.left.value).toEqual(12);
        expect(tree.root.right.value).toEqual(14);
    });
  });

// Returns false for the `contains` method, given an existing or non-existing node value.
describe("Returns false for the `contains` method, given an existing or non-existing node value.", () => {
    it("Returns false for the `contains` method, given an existing or non-existing node value.", () => {
        const tree = new BinarySearchTree();
        tree.add(13);
        tree.add(12);
        tree.add(11);
        tree.add(14);

        expect(tree.contains(12000)).toEqual(false);
        expect(tree.contains(12)).toEqual(true);
    });
  });