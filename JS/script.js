"use strict";

let num = 50;
let numberOfFilms;
let a,
    b;

const personalMOvieDB = {
    count: 0,
    movies: {},
    actors: {},
    generes: [],
    private: false,
    start: function(){
        personalMOvieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMOvieDB.count == '' || personalMOvieDB.count == null || isNaN(personalMOvieDB.count)) {
            personalMOvieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 1; i <= 2; i++) {
            a = prompt('Один из последних просмотренных фильмов?', '');
            b = +prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMOvieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMOvieDB.count <= 10) {
            alert('Просмотренно мало фильмов');
        } else if (personalMOvieDB.count >= 10 && personalMOvieDB.count <= 30) {
            alert('Просмотренно норм фильмов');
        } else if (30 <= personalMOvieDB.count) {
            alert('Просмотренно очень много фильмов');
        } else {
            alert('Ошибка');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMOvieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (!personalMOvieDB.private){
            personalMOvieDB.private = true;
        } else {
            personalMOvieDB.private = false;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
            if (genre == '' || genre == null){
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMOvieDB.generes[i-1] = genre;
            } 
        }

        personalMOvieDB.generes.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} - это ${item}`)
        });

    }
};
