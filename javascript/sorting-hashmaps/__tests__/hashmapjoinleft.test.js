'use strict';

const leftjoin = require ('../hashmap-left-join/hashmap-left-join')
const {Hashtable} = require('../hashmap-left-join/hashtable')

// set the left table
let leftTable = new Hashtable(1024);
leftTable.set('diligent', 'employed');
leftTable.set('fond', 'enamored');
leftTable.set('guide', 'usher');
leftTable.set('outfit', 'garb');
leftTable.set('wrath', 'anger');


// set the right table
let rightTable = new Hashtable(1024);
rightTable.set('diligent', 'idle');
rightTable.set('fond', 'averse');
rightTable.set('guide', 'follow');
rightTable.set('flow', 'jam');
rightTable.set('wrath', 'delight');


describe("Repeated Word Tests", () => {

    // “Happy Path” - Expected outcome
    it("Insertion sort function operates as expected.", () => {

        let result = leftjoin (leftTable, rightTable);

    expect(result).toEqual(  [
        'diligent', 'employed', 'diligent',
        'idle',     'outfit',   'garb',
        null,       'fond',     'enamored',
        'fond',     'averse',   'guide',
        'usher',    'guide',    'follow',
        'wrath',    'anger',    'wrath',
        'delight'
      ]);

        
    });
    // Expected failure
    it("Expected failure", () => {
        let Table1 = new Hashtable(1024);
        Table1.set('diligent', 'employed');
        let Table2 = new Hashtable(1024);
        let result = leftjoin (Table1, Table2);
        expect(result).toEqual(["diligent", "employed", null]);

        });
    // Edge Case (if applicable/obvious)
    it("Edge Case (if applicable/obvious)", () => {
        let Table1 = new Hashtable(1024);
        
        let Table2 = new Hashtable(1024);
        Table2.set('diligent', 'employed');
        let result = leftjoin (Table1, Table2);

        expect(result).toEqual(undefined);
        });
  });



