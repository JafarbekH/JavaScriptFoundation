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



const a = prompt("Ohirgi ko'rgan serialingiz", ""),
 b = prompt("Nechi baxo berasiz ", ""),
 c = prompt("Ohirgi ko'rgan serialingiz", ""),
 d = prompt("Nechi baxo berasiz", "");

seriesDB.series[a] = b;
seriesDB.series[3] = d;


console.log(seriesDB);