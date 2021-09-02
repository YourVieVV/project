"use strict";

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

<<<<<<< HEAD
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        continue;
    }

    console.log(i);
    
    
}
=======
let a,
    b;

// for (let i = 1; i <= 2; i++) {
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = +prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMOvieDB.movies[a] = b;
//     } else {
//         i--;
//     }

// }

let i = 0;

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

do {
        a = prompt('Один из последних просмотренных фильмов?', '');
        b = +prompt('На сколько оцените его?', '');
        i++;
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMOvieDB.movies[a] = b;
        } else {
            i--;
        }
    
    
    }
    while (i<2);



if (personalMOvieDB.count < 10) {
    alert('Просмотренно мало фильмов');
} else if (personalMOvieDB.count > 10 && personalMOvieDB.count < 30) {
    alert('Просмотренно норм фильмов');
} else if (30 < personalMOvieDB.count) {
    alert('Просмотренно очень много фильмов');
} else {
    alert('Ошибка');
}

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMOvieDB.movies[a] = b;
// personalMOvieDB.movies[c] = d;

console.log( personalMOvieDB);
>>>>>>> temp-branch
