'use strict';

let numberOfFilms;
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

function detectPersonalLevel() {
	if (numberOfFilms < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
		alert('Вы классический зритель');
	} else if (numberOfFilms > 30) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const questionFirst = prompt('Один из последних просмотренных фильмов?', '');
		const questionSecond = prompt('На сколько оцените его?', '');
		if (questionFirst != '' && questionFirst != null && questionFirst.length < 50 && questionSecond != '' && questionSecond != null && questionSecond.length < 50) {
			personalMovieDB.movies[questionFirst] = questionSecond;
		} else {
			i--;
		}
	}
}

function showMyDB() {
	if (personalMovieDB.privat === false) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
	}
}

start();
detectPersonalLevel();
rememberMyFilms();
