'use strict';

const quickSort = require('../quick-sort/quick-sort.js');

let arrtest = [8,4,23,42,16,15];


describe("Quick Sort Tests", () => {

    // “Happy Path” - Expected outcome
    it("Quick sort function operates as expected.", () => {

    let result = quickSort(arrtest);
       
    expect(result).toEqual([ 4, 8, 15, 16, 23, 42 ]);
    });
    // Expected failure
    it("Expected failure", () => {
        let failTest = [];
        let result = quickSort(failTest);
           
        expect(result).toEqual([]);
        });
    // Edge Case (if applicable/obvious)
    it("Edge Case (if applicable/obvious)", () => {

            let edgeTest = [2,3,5,7,13,11];
            let result = quickSort(edgeTest);

            console.log(result);
            
            expect(result).toEqual([ 2, 3, 5, 7, 11, 13]); 
                                
        });
  });



