let numberOfFils;


function start() {
     numberOfFils = prompt('Сколько фильмов вы уже посмотрели?', '');
     
     while (numberOfFils == '' || numberOfFils == null || isNaN(numberOfFils) ) {
        numberOfFils = prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}

start()

const personalMovieDB = {
    count: numberOfFils,
    movies: {},
    actors: {},
    genres: [],
    privat: false  
}


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 30 ) {
        console.log('вы киноман!!!')
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
        console.log('вы обычный зритель')
    }
}

detectPersonalLevel()

      
function rememberMyFilms() {
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
}

// rememberMyFilms()


function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    }
}

// showMyDB()

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const c = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i] = c
    }
    
    console.log(personalMovieDB)
}   

writeYourGenres()
      
      
    
