"use strict";

const arr = [1, 2, 3, 4, 5, 6];


arr.forEach(function (item, index, arr) {
    console.log(`${item} : ${index} into the ${arr}`);
    
});

// arr.pop();
// arr.push(7);

// arr.shift();
// arr.unshift(0);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 
// }

// for (let value of arr) {
//     console.log(value);
// }