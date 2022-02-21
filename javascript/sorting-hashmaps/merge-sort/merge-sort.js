'use strict';

let testArray = [8,4,23,42,16,15];

function mergeSort (arr) {

    let n = arr.length;

    if (n > 1) {
        let mid = Math.floor(n / 2); // from matt miguel
        let left = mergeSort(arr.slice(0,mid));
        let right = mergeSort(arr.slice(mid));
        
        merge(left, right, arr);
    }

    return arr;

}


function merge (leftArr, rightArr, arr){
        
    let i = 0; // LEFT COUNTER
    let j = 0; // RIGHT COUNTER
    let k = 0; // ARR COUNTER

    while (i < leftArr.length && j < rightArr.length){
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i+=1;
        } else {
            arr[k] = rightArr[j];
            j+=1;
        }
        k+=1;
    }

    if (i === leftArr.length){
        //   set remaining entries in arr to remaining values in right
        arr[k] = rightArr[j];
        j+=1;

    } else {
        //   set remaining entries in arr to remaining values in left
        arr[k] = leftArr[i];
        i+=1;
    }

    // return mergedArr;

}

module.exports = mergeSort;