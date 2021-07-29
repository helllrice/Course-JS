


// function start() {
//      numberOfFils = prompt('Сколько фильмов вы уже посмотрели?', '');
     
//      while (numberOfFils == '' || numberOfFils == null || isNaN(numberOfFils) ) {
//         numberOfFils = prompt('Сколько фильмов вы уже посмотрели?', '');
//      }
// }

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
        start: () => {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
                personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        },
        detectPersonalLevel: () => {
            if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов')
            } else if (personalMovieDB.count >= 30 ) {
                console.log('вы киноман!!!')
            } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
                console.log('вы обычный зритель')
            }
        },
        rememberMyFilms: () => {
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
             console.log(personalMovieDB); 
        },
        writeYourGenres: () => {
            for (let i = 1; i <= 3; i++) {
                const c = prompt(`Ваш любимый жанр под номером ${i}`)
                personalMovieDB.genres[i] = c
            }
            
            console.log(personalMovieDB)
        },   
        showMyDB: () => {
            if(personalMovieDB.privat == false) {
                console.log(personalMovieDB)
            }
        },
        toggleVisibleMyDB: () => {
            if (personalMovieDB.privat) {
                
            }  else {
                personalMovieDB.privat = true
            }
        }
        
}

personalMovieDB.start()
personalMovieDB.detectPersonalLevel()
personalMovieDB.rememberMyFilms()
personalMovieDB.writeYourGenres()
personalMovieDB.showMyDB()
personalMovieDB.toggleVisibleMyDB()



      
      
    
