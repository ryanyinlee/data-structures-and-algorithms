'use strict';

const mergeSort = require('../merge-sort/merge-sort.js');

let arrtest = [8,4,23,42,16,15];


describe("Merge Sort Tests", () => {

    // “Happy Path” - Expected outcome
    it("Merge sort function operates as expected.", () => {

    let result = mergeSort(arrtest);
       
    expect(result).toEqual([4,8,15,16,23,42]);
    });
    // Expected failure
    it("Expected failure", () => {
        let failTest = [];
        let result = mergeSort(failTest);
           
        expect(result).toEqual([]);
        });
    // Edge Case (if applicable/obvious)
    xit("Edge Case (if applicable/obvious)", () => {

            let edgeTest = [2,3,5,7,13,11];
            let result = mergeSort(edgeTest);

            console.log(result);
            
            expect(result).toEqual([ 2, 3, 5, 7, 11, 13]); 
                                
        });
  });



