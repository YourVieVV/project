"use strict";

let num = 50;
let numberOfFilms;
let a,
    b;

const personalMOvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    private: false
};

// function start(){
//     personalMOvieDB.count[numberOfFilms] = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     // while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     //     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     // }
//     // return(numberOfFilms);
// }

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        a = prompt('Один из последних просмотренных фильмов?', '');
        b = +prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMOvieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel(){
    if (personalMOvieDB.count <= 10) {
        alert('Просмотренно мало фильмов');
    } else if (personalMOvieDB.count >= 10 && personalMOvieDB.count <= 30) {
        alert('Просмотренно норм фильмов');
    } else if (30 <= personalMOvieDB.count) {
        alert('Просмотренно очень много фильмов');
    } else {
        alert('Ошибка');
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMOvieDB.generes[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMOvieDB);
    }
}

// start();
// rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMOvieDB.private);







// }

// let i = 0;

// while (i < 2) {
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = +prompt('На сколько оцените его?', '');
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMOvieDB.movies[a] = b;
//     } else {
//         i--;
//     }


// }

// do {
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = +prompt('На сколько оцените его?', '');
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMOvieDB.movies[a] = b;
//     } else {
//         i--;
//     }


// }
// while (i < 3);





// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMOvieDB.movies[a] = b;
// personalMOvieDB.movies[c] = d;