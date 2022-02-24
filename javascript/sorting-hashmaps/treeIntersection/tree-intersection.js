'use strict';

const LinkedList = require ('./linkedlist');

class Hashtable {
    constructor (size){
        this.size = size;
        this.buckets = new Array(size);
    }

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
      let currentNode = list.head;
      let [keyFromList, value] = currentNode.value.split(':');
      if (keyFromList === key) {
        return value;
      }
    } else {
        return null;
    }
}

contains(key){
let keyIn = this.hash(key);

if(this.buckets[keyIn]) {
    return true; // return true if key
} else {
    return false; // else return false
}
}

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

hash(key){      
    let chars = key.split('');
    let sum = chars.reduce((state, char) => {
        return state + char.charCodeAt(0);
    }, 0);
    let initialHash = sum * 599;
    return initialHash % 1024;
    }

}

function treeIntersection (bst1, bst2) {




}

module.exports = treeIntersection;