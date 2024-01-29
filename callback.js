"use strict";

function first(cb) {
    // code 
    setTimeout(() => {
        console.log(1);
        cb();
    }, 1000);
    
    
}

first(function () {
    console.log(2);
});


// function note(ism, callback) {
//     console.log(`Mening ismim ${ism}`);
//     callback();
// }

// note("Ja'far", function () {
//     console.log("Men TATU Samarqand filialida o'qiyman!");
// })