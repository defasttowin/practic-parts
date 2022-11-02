'use strict';

//const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//const personalMovieDB = {
//	count: numberOfFilms,
//	movies: {},
//	actors: {},
//	genres: [],
//	private: false,
//};

//const questionFirst = prompt('Один из последних просмотренных фильмов?', '');
//const questionSecond = prompt('На сколько оцените его?', '');
//const questionThree = prompt('Один из последних просмотренных фильмов?', '');
//const questionFor = prompt('На сколько оцените его?', '');

//personalMovieDB.movies[questionOne] = questionTwo;
//personalMovieDB.movies[questionThree] = questionFor;

//console.log(porsonalMovieDB);

const personalMovieDB = {
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
personalMovieDB.count = numberOfFilms;
if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	alert('Вы киноман');
} else {
	alert('Произошла ошибка');
}
for (let i = 0; i < 2; i++) {
	const questionFirst = prompt('Один из последних просмотренных фильмов?', '');
	const questionSecond = prompt('На сколько оцените его?', '');
	if (questionFirst != '' && questionFirst != null && questionFirst.length < 50 && questionSecond != '' && questionSecond != null && questionSecond.length < 50) {
		personalMovieDB.movies[questionFirst] = questionSecond;
	} else {
		i--;
	}
}

console.log(personalMovieDB);
