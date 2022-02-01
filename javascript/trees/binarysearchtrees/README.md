# Trees

https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html

## Challenge

**Node**

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

**Binary Tree**

Create a Binary Tree class
Define a method for each of the depth first traversals:
pre order
in order
post order which returns an array of the values, ordered appropriately.

Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

**Binary Search Tree**

Create a Binary Search Tree class
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
Add
Arguments: value
Return: nothing
Adds a new node with that value in the correct location in the binary search tree.
Contains
Argument: value
Returns: boolean indicating whether or not the value is in the tree at least once.

## Structure and Testing

Can successfully instantiate an empty tree
Can successfully instantiate a tree with a single root node
For a Binary Search Tree, can successfully add a left child and right child properly to a node
Can successfully return a collection from a preorder traversal
Can successfully return a collection from an inorder traversal
Can successfully return a collection from a postorder traversal
Returns false for the `contains` meethod, given an existing or non-existing node value.


## Approach & Efficiency
The big O for this is O(log(n))

## API

`preOrder` - goes through the tree in preOrder

`inOrder` - goes through the tree in inOrder

`postOrder` - goes through the tree in postOrder

`add(value)` - adds to the Binary Search Tree (should add in appropriate spot) please don't add a value already in the tree.

`contains(value)` - sees if the value exists in the tree by searching it going left or right depending on the start value. returns true or false.


## Credit

UDemy - JavaScript Algorithms and Data Structures Masterclass by Colt Steele
