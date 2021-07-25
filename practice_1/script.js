const numberOfFils = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFils,
    movies: {},
    actors: {},
    genres: [],
    privat: false  
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count > 30 ) {
    alert('вы киноман!!!')
}

      
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          
    if (a != null && b != null) {
        console.log('okey')
    } else {
        i--;
    }
          
    personalMovieDB.movies[a] = b
  }
      
      console.log(personalMovieDB)
      
      
    
