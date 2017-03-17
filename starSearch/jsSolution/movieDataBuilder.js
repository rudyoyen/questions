"use strict";

const labels = ["title", "releaseYear", "director", "starsList"];
const numOfRowsPerMovie = labels.length;
const numOfRowsBetweenMovies = 1;

function updateStarSchema (stars, movieId, starsObject) {
	for (let star of stars) {
		if (!starsObject[star]) starsObject[star] = [];	//create array for star if doesn't already exist
		starsObject[star].push(movieId);	//push movie id into the star's array
	}
}

function createMovieObject (currMovieData, movieId, starsObject) {
	const movie = {};

	labels.forEach((label, index) => {
		//if element is list of stars
		if (label === 'starsList') {
			//convert comma separated string to array
			currMovieData[index] = currMovieData[index].split(", ");
			
			//add current movieId to the stars object
			updateStarSchema(currMovieData[index], movieId, starsObject);
		} 
		//add new property to movie object
		movie[label] = currMovieData[index];
	});

	return movie;
}

function makeMovieDataObjects (flatMovieData) {
	const starsObject = {};
	const moviesObject = {};
	let movieId = 0;

	while (flatMovieData.length > 0) {
		let currMovieChunk = flatMovieData.splice(0, numOfRowsPerMovie);
		moviesObject[movieId] = createMovieObject(currMovieChunk, movieId, starsObject);
		movieId++;
		//if we have an extra space between moviesObject, remove it from array before getting next chunk of data
		flatMovieData.splice(0, numOfRowsBetweenMovies);
	}

	return {
		movies: moviesObject,
		starsMovieIds: starsObject
	};
}

module.exports = {
	makeMovieDataObjects
};