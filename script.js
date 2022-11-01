'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const porsonalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

const questionOne = prompt('Один из последних просмотренных фильмов?', '');
const questionTwo = prompt('На сколько оцените его?', '');
const questionThree = prompt('Один из последних просмотренных фильмов?', '');
const questionFor = prompt('На сколько оцените его?', '');

porsonalMovieDB.movies[questionOne] = questionTwo;
porsonalMovieDB.movies[questionThree] = questionFor;

console.log(porsonalMovieDB);
