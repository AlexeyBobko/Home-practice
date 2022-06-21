'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(priv){
    if(priv === false){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

let favGenres;
function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`)
    }
}
writeYourGenres();

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

function rememberMyFilms(){
    for ( let i = 0; i < 2; i++) {
        const filmOne = prompt('Один из последних просмотренных фильмов', ''),
              markOne = prompt('На сколько оцените его?', '');
              if(filmOne != null && markOne != null && filmOne != '' & markOne != '' && filmOne.length < 50){
                personalMovieDB.movies[filmOne] = markOne;
              } else {
                  console.log('error');
                  i--;
              }     
        } 
}
// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('мало');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('класический зритель');
    }else if(personalMovieDB.count > 30){
        console.log('киноман');
    }else {
        console.log('Ошибка');
    }
}
// detectPersonalLevel();
// console.log(personalMovieDB);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            JS: '50%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {languages} = personalPlanPeter.skills;
        let str = `Мне ${plan.age} лет и я владею языками: `;
        languages.forEach(function(lang){
            str += `${lang.toUpperCase()} `;
        });
        console.log(str);
    }

};

    /*1 задача */

// function showExpirience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }
// showExpirience(personalPlanPeter);

    /*2 задача */

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = personalPlanPeter.skills;
//     if(Object.keys(programmingLangs).length === 0) {
//         console.log('');
//     }else {
//         for(let key in programmingLangs) {
//             console.log(`Язык ${key} изучен на ${programmingLangs[key]}`);
//         }
//     }
// }
// showProgrammingLangs(personalPlanPeter);

    /*з-я задача */

    personalPlanPeter.showAgeAndLangs(personalPlanPeter);
    
/* ------------------------ */

/* 1 task */

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = 'Семья состоит из: '
    if(arr.length === 0) {
        return 'Семья пуста';
    }else {
        arr.forEach(function(mem){
            str += `${mem} `
        })
        console.log(str);
    }
}
showFamily(family);

/* 2 task */

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let value of arr) {
        console.log(value.toLowerCase());
    }
}
standardizeStrings(favoriteCities);

/* 3 task */

const someString = 'This is some strange string';

let newStr = '';
function reverse(str) {
    if( typeof str !== 'string'){
        console.log('Ошибка');
    }else {
        // for ( let i = str.length - 1; i >= 0; i--) {
        //     newStr += str[i];
        // }
        const rex = str.split('').reverse().join('');
        console.log(rex);
    }
}

reverse(someString);

/* 4 task */

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const bothCurrencies = [...baseCurrencies, ...additionalCurrencies];
let avalCurrencies = `Доступные валюты:\n`
function availableCurr(arr, missingCurr) {
    if (bothCurrencies.length == 0){
        console.log('Нет доступных валют');
    }else {
        arr.forEach( function(item) {
            if ( item !== missingCurr){
                avalCurrencies += `${item}\n`
            }
        })
        console.log(avalCurrencies);
    }
}
availableCurr(bothCurrencies, 'RUB');