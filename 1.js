
'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start : function () {
    personalMovieDB.count = +prompt('Сколько фильмоы вы посмотрели?', '');
  
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt('Сколько фильмоы вы посмотрели?', '');
    }
  },
  rememberMyFilms: function(){
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
        b = prompt('На сколько вы  оцените?', '');
    
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
      }
      else {
        console.log("Error")
        i--;
      }
  }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB > 30) {
      console.log("Вы кдасический зритель")
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман")
    } else {
      console.log("Произошла ошибка")
    }
  },
  showMyDatabase: function(hidden){
    if (!hidden){
      console.log(personalMovieDB)
    }
  },
  writeYpurGenres:function(){
    for(let i=1; i<2; i++){
      let genres = prompt(`Напишите люьимые жанры через запятую`);
      if(genres ==='' || genres  == null){
        console.log("Вы ввели некорректные данные или не ввели их");
        i--;
      } else {
        personalMovieDB.genres[i] = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item ,i) =>{
      console.log(`Любимый жанр ${i+1} - ${item}`)
    })
  },
   toggleVisibleMyDB: function(){
    if(personalMovieDB.privat==false){
      personalMovieDB.privat = true;
    }else{
      personalMovieDB.privat = false;
    }
  }
};





