"use strict";

const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        seriesDB.count = +prompt("nechta serial ko'rdingiz?");

        while (seriesDB.count == "" || seriesDB.count == null || isNaN(seriesDB.count)) {
            seriesDB.count = +prompt("nechta serial ko'rdingiz?"); 
        }
    },
    rememberMySeries: function () {
        for (let i = 0; i <= 1 ; i++) {
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
    },
    detectLevelSeries: function () {
        if (seriesDB.count < 5) {
            console.log("Kma serial ko'ribsiz!!!");
        } else if (seriesDB.count >= 5 && seriesDB.count <= 10) {
            console.log("Siz klassik tomoshabin ekansiz!!!");
        } else {
            console.log("Siz serialchi zvezda ekansiz!!!");
        }
    },
    showDB: function () {
        if (seriesDB.privat == false) {
            console.log(seriesDB); 
        } else {
            console.log("Error")
        }
    },
    visibleDB: function () {
        if (seriesDB.privat) {
            seriesDB.privat = false
        } else {
            seriesDB.privat = true 
        }
    },
    writeGenres: function () {
        // for(let i = 0; i < 3; i++) {
        //     const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);
        //     if (genre === '' || genre === null) {
        //         console.log("Siz notori malumot kiritdingiz.");
        //         i--
        //     } else {
        //         seriesDB.genres[i] = genre
        //     }
        //     seriesDB.genres[i] = genre;
        // }

        let genres = prompt("Yaxshi ko'rgan janrlaringizni vergul yordamida yozing").toLowerCase()
        if (genres === '' || genres === null) {
            console.log("Siz notori malumot kiritdingiz.");
            i--
        } else {
            seriesDB.genres = genres.split(', ')
            seriesDB.genres.sort()
        }

        seriesDB.genres.forEach((item, index) => {
            console.log(`Yaxshi ko'rgan janringiz ${index + 1}, nomi ${item}, `);
        })
    },
};



