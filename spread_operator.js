'use strict'

const calc = [1, 2, 3]

function logger(x, y, z) {
    console.log(x + y + z);
}

logger(...calc)