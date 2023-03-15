
'use strict';
const numberOfFilms = prompt('Сколько фильмоы вы посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько вы  оцените?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  }
  else {
    i--;
  }

  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB > 30) {
    console.log("Вы кдасический зритель")
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман")
  } else {
    console.log("Произошла ошибка")
  }

}
console.log(personalMovieDB);
