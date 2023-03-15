
'use strict';

let numberOfFilms;

function start(){
  numberOfFilms = +prompt('Сколько фильмоы вы посмотрели?', '');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмоы вы посмотрели?', '');

  }
}
start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms(){
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько вы  оцените?', '');
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
    }
    else {
      i--;
    }
}
}

rememberMyFilms();

function detectPersonalLevel(){
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

detectPersonalLevel();


function showMyDatabase(hidden){
  if (!hidden){
    console.log(personalMovieDB)
  }
}
showMyDatabase(personalMovieDB.privat);

function writeYpurGenres(){
  for(let i=1; i<=3; i++){
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYpurGenres()


