"use strict";

const fs = require("fs");
const util = require("util"); //TODO remove once done debugging
const moviesSource = require("./moviesSource.js");
const outputTemplate = require("./outputTemplate.js");

const fileName = "../movies.txt";
const labels = ["title", "releaseYear", "director", "stars"];

function splitOnNewLine (text) {
	return text.split("\n");
}

function findActorsMovies (name, movieData) {
	const matchingMovies = [];
	const actorsMovies = movieData.actors[name];

	for (let i = 0; i < actorsMovies.length; i++) {
  	let movieId = actorsMovies[i];
  	matchingMovies.push(movieData.movies[movieId]);
  }
  return matchingMovies;
}

fs.readFile(fileName, 'utf8', function(err, data) {
  if (err) throw err;

  //console.log(util.inspect(data));
  //let newData = data.replace(/[\]/gi, "'");
  let dataWithoutReturns = data.replace(/\r/gi, "");
  //console.log(util.inspect(dataWithoutReturns));
  let dataSplitByLine = splitOnNewLine(dataWithoutReturns); //TODO refactor so you don't have to loop twice (first split on new line, then split on empty string)
  
  const movieData = moviesSource.buildMoviesArray(dataSplitByLine, labels);

  let name = process.argv[2] + " " + process.argv[3];
	let results = findActorsMovies(name, movieData);

  let output = outputTemplate.getOutput(name, results);
  console.log(output);
});

function add(a,b) {
  return a + b;
}

module.exports = {
  add
}

