'use strict';

const LinkedList = require ('./linkedlist');

class Hashtable {
    constructor (size){
        this.size = size;
        this.buckets = new Array(size);
    }

// set
// Arguments: key, value
// Returns: nothing
// This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
// Should a given key already exist, replace its value from the value argument given to this method.
set (key, value) {
    let position = this.hash(key);
    let payload = `${key}:${value}`;

    if (this.buckets[position]) {
        
        let bucket = this.buckets[position];
        bucket.add(payload);
        
    }  else {
        let bucket = new LinkedList();

        bucket.add(payload);
        this.buckets[position] = bucket;
    }
}

get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let list = this.buckets[position];
      // we want to find the value associated with our key
      // traverse our linked list / array to find our values

      let currentNode = list.head;
      let [keyFromList, value] = currentNode.value.split(':');
      if (keyFromList === key) {
        return value;
      }
    } else {
        return null;
    }

}

// contains
// Arguments: key
// Returns: Boolean, indicating if the key exists in the table already.
contains(key){
let keyIn = this.hash(key);

if(this.buckets[keyIn]) {
    return true; // return true if key
} else {
    return false; // else return false
}


}


// keys
// Returns: Collection of keys
keys() {
    let keyArray = [];
    for (let i = 0; i < this.buckets.length; i+=1){
        if(this.buckets[i]){
            for(let j = 0; j < this.buckets[i].length; j+=1){
                if(!keyArray.includes(this.buckets[i][j][0])){
                    keyArray.push(this.buckets[i][j][0])
                }
            }
        }
    }
    return keyArray;
}

// hash
// Arguments: key
// Returns: Index in the collection for that key
hash(key){      
    let chars = key.split('');
    let sum = chars.reduce((state, char) => {
        return state + char.charCodeAt(0);
    }, 0);

    let initialHash = sum * 599;
    return initialHash % 1024;
    }

        // Write a function called repeated word that finds the first word to occur more than once in a string
        xrepeatedWord(string){
            // take in the string

            // split up the string into words as keys

            // push into hashtable
            
            // find the keys that have the most collisions

            // 
            return string;
        }

 


}

module.exports = { Hashtable, repeatedWord };

let table = new Hashtable(1024);

// let stringTable = new Hashtable(1024);

// stringTable.repeatedWord('Once upon a time, there was a brave princess who...');

// console.log(stringTable.buckets);

           // Write a function called repeated word that finds the first word to occur more than once in a string
         function  repeatedWord(string){
            // take in the string
            let stringArray = string.replace(/[^a-zA-Z ]/g, "").toUpperCase().split(' ');
            
            let stringTable = new Hashtable(stringArray.length);
            
            for (let i = 0; i < stringArray.length; i+=1){
                if(stringTable.contains(stringArray[i])){
                    return stringArray[i];
                }
                stringTable.set(stringArray[i]);
            }
            // find the keys that have the most collisions
            console.log(stringTable)
            // 
            return string;
        }

let response = repeatedWord("Once upon a time, there was a brave princess who...");
console.log(response);

let response2 = repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – it it it it it it in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...");
console.log(response2);

let response3 = repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...");
console.log(response3);

table.set('testValue1', 123);
table.set('testValue2', 456);
table.set('testValue3', 789);

table.set('testValue3', 789);

let test1 = "collection1'234"

test1 = test1.replace(/[^a-zA-Z ]/g, "");


// console.log(test1);

// console.log(test2);


let keyToGet = 'testValue1'
// console.log(table.get(keyToGet));


// console.log(table.hash(keyToGet));
// console.log(table.keys());

// console.log(table.buckets);