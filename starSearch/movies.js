"use strict";


let fs = require("fs");
let util = require("util");

const labels = ["title", "releaseYear", "director", "stars"];
const actorsObj = {};
const movies = {};

let args = process.argv;

function splitOnNewLine (text) {
	return text.split("\n");
}

function buildMoviesArray (moviesArray) {
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

	//console.log(movies);
	let title = movies[0].title;
	//console.log(movies);
	//console.log(actorsObj);
	//TODO write test for correctly printing output even if data is bad
	let paragraph = 
	`Title: ${movies[0].title}
two lines
or three`;
	//console.log(paragraph);
	return movies;
}

fs.readFile("./movies.txt", 'utf8', function(err, data) {
  if (err) throw err;

  //console.log(util.inspect(data));
  //let newData = data.replace(/[\]/gi, "'");
  let dataWithoutReturns = data.replace(/\r/gi, "");
  console.log(util.inspect(dataWithoutReturns));
  let dataSplitByLine = splitOnNewLine(dataWithoutReturns); //TODO refactor so you don't have to loop twice (first split on new line, then split on empty string)
  let builtMovies = buildMoviesArray(dataSplitByLine);

  let name = args[2] + " " + args[3];
  console.log("args", name);
  //console.log(actorsObj);
  //console.log(movies);
  let actorsMovies = actorsObj[name];
  for (let i = 0; i < actorsMovies.length; i++) {
  	let movieId = actorsMovies[i];
  	console.log(movies[movieId]);
  }
});



//console.log(movies);