"use strict";

const actorsObj = {};
const movies = {};

function buildMoviesArray (moviesArray, labels) {
	//const movies = [];
	let currMovie = {};
	let counter = 0;
	let movieId = 0;

	for (let i = 0; i < moviesArray.length; i++) {
		//if (/^\r$/.test(moviesArray[i])) {
		if (counter >= labels.length) {
			movies[movieId] = currMovie;
			movieId += 1;
			currMovie = {};
			counter = 0;
		} else {
			//TODO clean data before pushing (ie remove \r and other \ escapes)
			//currMovie.push(moviesArray[i]);
			if (labels[counter] === "stars") {
				currMovie[labels[counter]] = [];
				let stars = moviesArray[i].split(", "); //TODO dont loop through twice, splitting and building actors Obj
				for (let j = 0; j < stars.length; j++) {
					//console.log(util.inspect(stars[j]));
					let actorsName= stars[j];


					//create actors array of their movies if it doesn't exist
					if (actorsObj[actorsName] == undefined) {
						actorsObj[actorsName] = [];
					}

					actorsObj[actorsName].push(movieId);
					currMovie[labels[counter]].push(actorsName);
				}
				
			} else {
				currMovie[labels[counter]] = moviesArray[i];
			}
			counter += 1;
		}
		movies[movieId] = currMovie;
	}

	return {
		actors: actorsObj,
		movies: movies
	};
}

module.exports = {
	buildMoviesArray
};