'use strict';

let arrtest = [20,18,12,8,5,-2];

function insertionSort(arr) {


    for (let i = 1; i < arr.length; i+=1) {
        let j = i - 1;
        let temp = arr[i];
     
        while (j >= 0 && temp < arr[j]) {
            arr[j+1] = arr[j];
            j -= 1;
        }
    
        arr[j+1] = temp;
    
    }
    
    return arr;
    
    }

  let result = insertionSort(arrtest);

    //console.log(result)

module.exports = insertionSort;