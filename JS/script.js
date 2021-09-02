"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMOvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    private: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMOvieDB.movies[a] = b;
personalMOvieDB.movies[c] = d;

console.log(personalMOvieDB);