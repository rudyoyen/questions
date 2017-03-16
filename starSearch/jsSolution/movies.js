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

function removeReturnCharacters (text) {
  return text.replace(/\r/gi, "");
}

function cleanData (data) {
  //console.log(util.inspect(data));
  //let newData = data.replace(/[\]/gi, "'");
  //TODO refactor so you don't have to loop twice (first split on new line, then split on empty string)
  return splitOnNewLine(removeReturnCharacters(data)); 
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

function onMovieDataReceived (rawData) {
  //CLEAN DATA
  const unstructuredMovieData = cleanData(rawData);
  
  //PARSE DATA - BUILD MOVIE SCHEMA
  const movieData = moviesSource.makeMovieAndStarSchema(unstructuredMovieData, labels);

  //GET MATCHING MOVIES
  const name = process.argv[2] + " " + process.argv[3];
  const results = findActorsMovies(name, movieData);

  //GET CORRECT FORMATTED OUTPUT
  const output = outputTemplate.getOutput(name, results);

  //DISPLAY OUTPUT
  console.log(output);
} 

function readMovieSource (file, onSuccessCallback) {
  fs.readFile(fileName, 'utf8', function(err, data) {
    if (err) throw err;
    onSuccessCallback(data);
  });
}

function start (file, callback) {
  readMovieSource(file, callback);
}

start(fileName, onMovieDataReceived);

module.exports = {
  splitOnNewLine,
  cleanData,
  removeReturnCharacters
}

