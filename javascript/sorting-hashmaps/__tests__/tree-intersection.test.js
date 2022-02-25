'use strict';

const treeIntersection = require('../treeIntersection/tree-intersection');
const {BinarySearchTree} = require ('../treeIntersection/trees');

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

const tree3 = new BinarySearchTree();
const tree4 = new BinarySearchTree();


describe("Repeated Word Tests", () => {

    // “Happy Path” - Expected outcome
    it("Insertion sort function operates as expected.", () => {

        let result = treeIntersection (tree, tree2);

expect(result).toEqual([100,160,125,175,200,350,500]);

        
    });
    // Expected failure
    it("Expected failure", () => {
        let result = treeIntersection (tree3, tree4);
        expect(result).toEqual(null);

        });
    // Edge Case (if applicable/obvious)
    xit("Edge Case (if applicable/obvious)", () => {


    expect().toEqual();
        });
  });



