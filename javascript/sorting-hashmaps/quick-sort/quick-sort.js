'use strict';

let testArray = [8,4,23,42,16,15];

function quickSort(arr, left=0, right=arr.length-1){

    // let left = 0;
    // let right = (arr.length - 1);    

    if (left < right) {
        // Partition the array by setting the position of the pivot value
        let position = partition(arr, left, right);
        console.log("position is: " + position);
        // Sort the left
        quickSort(arr, left, (position-1));
        // Sort the right
        quickSort(arr, (position+1), right);
    }
    //console.log("arr is: " + arr);
    return arr;
}

function partition(arr, left = 0, right= arr.length-1 ){
    // let left = 0;
    // let right = (arr.length - 1);    
    // set a pivot value as a point of reference
    let pivot = arr[left];
    // create a variable to track the largest index of numbers lower than the defined pivot
    let low = left;

    for(let i = left + 1; i <= right; i+=1){
        if(arr[i] < pivot){
            low+=1;
            swap(arr, low, i);
        }
    }
// place value of pivot location in middle

// all numbers smaller than the pivot are on the left, large on the right
swap(arr, left, low);
// return the pivot index point
console.log("low is: " +low)
return low;

}

function swap(arr, i, low){
    let temp;
    temp = arr[i];
    arr[i] = arr[low];
    arr[low]=temp;
}

module.exports = quickSort;

let result = quickSort(testArray);

console.log(result);