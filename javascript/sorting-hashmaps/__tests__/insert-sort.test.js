'use strict';

const insertionSort = require('../insertion-sort');

let arrtest = [20,18,12,8,5,-2];



describe("Insertion Sort Tests", () => {

    // “Happy Path” - Expected outcome
    it("Insertion sort function operates as expected.", () => {

    let result = insertionSort(arrtest);
       
    expect(result).toEqual([ -2, 5, 8, 12, 18, 20 ]);
    });
    // Expected failure
    it("Expected failure", () => {
        let failTest = [];
        let result = insertionSort(failTest);
           
        expect(result).toEqual([]);
        });
    // Edge Case (if applicable/obvious)
    it("Edge Case (if applicable/obvious)", () => {

            let edgeTest = [5,12,7,5,5,7];
            let result = insertionSort(edgeTest);
            
            expect(result).toEqual([ 5, 5, 5, 7, 7, 12 ]);
        });
  });



