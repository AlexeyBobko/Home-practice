'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    showMyDB: function (priv) {
        if(priv === false){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for(let i = 1; i < 2; i++){
            let genre = prompt(`Ваш жанры через запятую`);
            if(genre === null || genre === ''){
                i--;
            }else {
                personalMovieDB.genres = genre.split(', ');
            }
        }
        personalMovieDB.genres.forEach((item, j) => {
            console.log(`Любимый жанр ${j+1} - это ${item}`);
        });
    },
    rememberMyFilms: function () {
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
    },
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function () {
        if(personalMovieDB.count < 10){
            console.log('мало');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('класический зритель');
        }else if(personalMovieDB.count > 30){
            console.log('киноман');
        }else {
            console.log('Ошибка');
        }
    },
};


/* Дополнительные задачи */


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

// Практика 4 

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        },
        {
            width: 19,
            length: 40
        }
    ],
    height: 8,
    moneyPer1m3: 25,
    budget: 51000
};


function isBudgetEnough(data) {
    let square = 0;
    data.shops.forEach((item) => {
        square += item.length*item.width;
    });
    let volume = square*data.height;
    let necesBudget = volume*data.moneyPer1m3;
    if(necesBudget >= data.budget){
        console.log('Бюджета не хватает');
    } else {
        console.log('Бюджета достаточно');
    }
}

isBudgetEnough(shoppingMallData);

/*--------------------------*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let a = [], b = [], c = [], last = [];
    for( let i = 0; i < arr.length; i++){
        if(i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i])
        } else {
            last.push(arr[i])
        }
    }
    console.log(a,b,c, `Оставшиеся студенты: ${last.length === 0 ? '-' : last.join(', ')}`);
}

sortStudentsByGroups(students);
