const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmOne = prompt('Один из последних просмотренных фильмов', ''),
      markOne = prompt('На сколько оцените его?', ''),
      filmTwo = prompt('Один из последних просмотренных фильмов', ''),
      markTwo = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[filmOne] = markOne;
      personalMovieDB.movies[filmTwo] = markTwo;

console.log(personalMovieDB);