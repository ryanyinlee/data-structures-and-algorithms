'use strict';

const bracketCheck = require('../stack-queue-brackets.js');


// “Happy Path” - Expected outcome
describe("Can check an expression to see if it's balanced.", () => {
    it("bracketComparator should return true for a balanced expression.", () => {
     
  let data = "([{}])"
 

let returnValue = bracketCheck(data)


      expect(returnValue ).toEqual(true);
    });
  });

// Expected failure
describe("Can check an expression to see if it's NOT balanced.", () => {
    it("bracketComparator should return false for an un-balanced expression.", () => {
        let data2 = "([{])"
        let returnValue2 = bracketCheck(data2)

        
      

      expect(returnValue2).toEqual(false);
    });
  });

// Edge Case (if applicable/obvious)
describe("Should fail on an open bracket as a starting value.", () => {
    it("Should fail immediately.", () => {
        let data3 = "]([{])"
        let returnValue3 = bracketCheck(data3)

        
      

      expect(returnValue3).toEqual(false);
    });
  });