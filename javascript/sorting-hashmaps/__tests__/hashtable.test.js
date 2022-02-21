'use strict';

const Hashtable = require('../hashtable/hashtable.js');

describe("HashTable Tests", () => {

    let table = new Hashtable(1024);
    table.set('testkey', 'testvalue');
    table.set('asdfakhsd3', 344);
    table.set('232kh3232d3', 43);

    // Setting a key/value to your hashtable results in the value being in the data structure
    it("Setting a key/value to your hashtable results in the value being in the data structure", () => {

    let response = table.contains('testkey');    
    expect(response).toBe(true);
    
    });

    // Retrieving based on a key returns the value stored
    it("Retrieving based on a key returns the value stored", () => {
   
        let response = table.get('testkey')
        console.log(response);
        expect(response).toBe('testvalue');

        });

    // Successfully returns null for a key that does not exist in the hashtable
    it("Successfully returns null for a key that does not exist in the hashtable", () => {
        let response = table.get('fakekey')
        console.log(response);
        expect(response).toBe(null);
          
            
        });
    
      // Successfully returns a list of all unique keys that exist in the hashtable
    it("Successfully returns a list of all unique keys that exist in the hashtable", () => {

        let response = table.keys();
        console.log(response);
        expect(!response).toBe(false);
          
        
        
    });


       // Successfully handle a collision within the hashtable
        it("Successfully handle a collision within the hashtable", () => {

            table.set('1234', 111);
            table.set('1234', 999);
            
            let response = table.contains('1234');    
            expect(response).toBe(true);
            
        });
        
        // Successfully retrieve a value from a bucket within the hashtable that has a collision
        
    it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {

        table.set('1234', 111);
        table.set('1234', 999);
        
        let response = table.get('1234');    
        // let response2 = table.get('1234');  
        // console.log(response2);
        expect(response).toBe("111");
        
        
    });


        // Successfully hash a key to an in-range value
        it("Successfully hash a key to an in-range value", () => {
            let response = table.hash('testykey');

            console.log(response);
            
            
        });



  });



