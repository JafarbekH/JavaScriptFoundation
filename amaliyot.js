"use strict";

const serial = prompt("nechta serial ko'rdingiz?");

const numberOfSeries = +serial

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false,
};




for (let i = 0; i < 2; i++) {
    const a = prompt("Ohirgi ko'rgan serialingiz", ""),
        b = prompt("Nechi baxo berasiz ", "");
    
    if (a != null && b != null && a != "" && b != "") {
        seriesDB.series[a] = b;
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }
}

if (seriesDB.count < 5) {
    console.log("Kma serial ko'ribsiz!!!");
} else if (seriesDB.count >= 5 && seriesDB.count <= 10) {
    console.log("Siz klassik tomoshabin ekansiz!!!");
} else {
    console.log("Siz serialchi zvezda ekansiz!!!");
}

console.log(seriesDB); 
