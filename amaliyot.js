"use strict";

let numberOfSeries;


function startApp() {
    numberOfSeries = +prompt("nechta serial ko'rdingiz?");

    while (numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)) {
        numberOfSeries = +prompt("nechta serial ko'rdingiz?"); 
    }
}

startApp();


const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false,
};



function rememberMySeries() {
    for (let i = 0; i < 3; i++) {
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
}

// rememberMySeries();


function detectLevelSeries() {
    if (seriesDB.count < 5) {
        console.log("Kma serial ko'ribsiz!!!");
    } else if (seriesDB.count >= 5 && seriesDB.count <= 10) {
        console.log("Siz klassik tomoshabin ekansiz!!!");
    } else {
        console.log("Siz serialchi zvezda ekansiz!!!");
    }
}

detectLevelSeries();



function showDB() {
    if (seriesDB.privat == false) {
        console.log(seriesDB); 
    } else {
        console.log("Error")
    }
}

showDB();

function writeGenres() {
    for(let i = 0; i <= 2; i++) {
        const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);
        seriesDB.genres[i] = genre;
    }
}

writeGenres();

