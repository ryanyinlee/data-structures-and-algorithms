'use strict';

const {Hashtable} = require ('./hashtable');


function leftJoin (leftHash, rightHash) {

    let returnArray = [];
    let placeholderArray = [];
    for (let i =0; i< leftHash.buckets.length; i+=1) {
        if (leftHash.buckets[i] !== undefined){
            let [key,value] = leftHash.buckets[i].head.value.split(':');
            placeholderArray.push(key,value);

            if (rightHash.contains(key)){
                let [rkey, rvalue] = rightHash.buckets[i].head.value.split(':');
                placeholderArray.push(rkey,rvalue);
            } else {
                placeholderArray.push(null);
            }

            returnArray.push(placeholderArray);
        }
    }
    return returnArray[0];

}

module.exports = leftJoin;

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


let result = leftJoin(leftTable,rightTable)

console.log(result);