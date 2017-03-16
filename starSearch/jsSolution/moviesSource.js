"use strict";

const labels = ["title", "releaseYear", "director", "stars"];
const starsObject = {};

function updateStarSchema (stars, movieId) {
	for (let star of stars) {
		if (!starsObject[star]) starsObject[star] = [];
		starsObject[star].push(movieId);
	}
}

function makeMovieObject (currMovieData, movieId) {
	const movie = {};
	let i = 0;
	for (let label of labels) {
		//if element is star data
		if (label === 'stars') {
			//convert comma separated string to array
			currMovieData[i] = currMovieData[i].split(", ");
			
			//add current movieId to the stars schema
			updateStarSchema(currMovieData[i], movieId);
		} 
		movie[label] = currMovieData[i];
		i++;
	}
	//console.log("movie:", movie);
	return movie;
}

function makeMovieSchema (flatMovieData) {
	const movies = {};
	let movieId = 0;
	while (flatMovieData.length > 0) {
		let currMovieChunk = flatMovieData.splice(0, labels.length);
		//console.log("currData:", currMovieChunk);
		movies[movieId] = makeMovieObject(currMovieChunk, movieId);
		movieId++;
		//if we have an extra space between movies, remove it from array before getting next chunk of data
		flatMovieData.splice(0,1);
	}

	return movies;
}

function makeMovieAndStarSchema (flatMovieData) {
	return {
		movies: makeMovieSchema(flatMovieData),
		actors: starsObject
	};
}


module.exports = {
	makeMovieAndStarSchema
};