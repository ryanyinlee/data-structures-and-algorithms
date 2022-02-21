'use strict';

const {Hashtable, repeatedWord} = require('../hashtable/hashtable.js');

describe("Repeated Word Tests", () => {

    // “Happy Path” - Expected outcome
    it("Insertion sort function operates as expected.", () => {

        let response = repeatedWord("Once upon a time, there was a brave princess who...");
console.log(response);

expect(response).toEqual('A');

        
    });
    // Expected failure
    it("Expected failure", () => {
        let response2 = repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – it it it it it it in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...");
console.log(response2);
expect(response2).toEqual('IT');

        });
    // Edge Case (if applicable/obvious)
    it("Edge Case (if applicable/obvious)", () => {

    
let response3 = repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...");
console.log(response3);
expect(response3).toEqual('SUMMER');
        });
  });



