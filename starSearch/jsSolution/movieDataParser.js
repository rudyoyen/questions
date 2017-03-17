"use strict";

const labels = ["title", "releaseYear", "director", "starsList"];
const numOfRowsPerMovie = labels.length;
const numOfRowsBetweenMovies = 1;

function updateStarsMovieIds (stars, movieId, starsMovieIds) {
	for (let star of stars) {
		if (!starsMovieIds[star]) starsMovieIds[star] = [];	//create array for star if doesn't already exist
		starsMovieIds[star].push(movieId);	//push movie id into the star's array
	}
}

function createMovie (movieData, movieId, starsMovieIds) {
	const movie = {};

	labels.forEach((label, index) => {
		//if element is list of stars
		if (label === 'starsList') {
			//convert comma separated string to array
			movieData[index] = movieData[index].split(", "); 
			
			//add current movieId to the stars object
			updateStarsMovieIds(movieData[index], movieId, starsMovieIds);
		} 
		//add new property to movie object
		movie[label] = movieData[index];
	});

	return movie;
}

function makeMovieDataObjects (flatMovieData) {
	const starsMovieIds = {};
	const moviesObject = {};
	let movieId = 0;

	while (flatMovieData.length > 0) {
		let currMovieChunk = flatMovieData.splice(0, numOfRowsPerMovie);
		moviesObject[movieId] = createMovie(currMovieChunk, movieId, starsMovieIds);
		movieId++;
		//if we have an extra space between moviesObject, remove it from array before getting next chunk of data
		flatMovieData.splice(0, numOfRowsBetweenMovies);
	}

	return {
		movies: moviesObject,	//object of all movies where keys are movieIds and values are movie objects
		starsMovieIds: starsMovieIds	//map of the stars names and arrays of the movies they appeared in based on movieId
	};
}

module.exports = {
	updateStarsMovieIds,
	createMovie,
	makeMovieDataObjects
};