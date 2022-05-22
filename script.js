const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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
if(personalMovieDB.count < 10){
    console.log('мало');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('класический зритель');
}else if(personalMovieDB.count > 30){
    console.log('киноман');
}else {
    console.log('Ошибка');
}
console.log(personalMovieDB);