
'use strict';
const numberOfFilms = +prompt('Сколько фильмоы вы посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
  markOfFilm = prompt('На сколько вы  оцените?', ''),
  a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько вы  оцените?', '');

personalMovieDB.movies[lastFilm] = markOfFilm;
personalMovieDB.movies[a] = b;
console.log(personalMovieDB);
