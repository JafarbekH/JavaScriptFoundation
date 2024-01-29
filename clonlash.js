"use strict";



// function nusxaObj(obj) {
//     let objNusxa = {}

//     for (let key in obj) {
//         objNusxa[key] = obj[key]
//     }

//     return objNusxa
// }

// const numbers = {
//     x: 10,
//     y: 5,
// }

// const newNumbers = nusxaObj(numbers) 

// newNumbers.x = 115

// console.log(numbers)
// console.log(newNumbers);


// const numbers = {
//     x: 10,
//     y: 5,
//     z: {
//         a: 1,
//         b: 2,
//     },
// }

// const newNumbers = Object.assign({}, numbers)

// console.log(newNumbers)




// SPREAD 

const liverpool = ['Mane', 'Salah']
const chelsea = ['Drogba', 'Tote']

const mixPlayer = [...liverpool, ...chelsea]

console.log(mixPlayer);


