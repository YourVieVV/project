"use strict";

let number = 50;

(number == 10) ? console.log('first') : (number == 20) ? console.log('two') : console.log('last');

switch (number) {
    case 49: 
        console.log('Неверно');
        break;
    case 100: 
        console.log('Неверно');
        break;
    case 50: 
        console.log('Верно');
        break;
    default: 
        console.log('Ничего');
        break;
}