"use strict";

const util = require("util"); 
const movieDataBuilder = require("./movieDataBuilder.js");
const outputBuilder = require("./outputBuilder.js");


function splitOnNewLine (text) {
	return text.split("\n");
}

function removeReturnCharacters (text) {
  return text.replace(/\r/g, "");
}

function cleanAndSplitData (data) {
  //return splitOnNewLine(removeReturnCharacters(data)); 
  return data.replace(/\r/g, "").split("\n");
}

function findStarsMovies (name, movieData) {
	//get the movieIds for all movies in which the star appeared
	const movieIds = movieData.starsMovieIds[name] || [];

  //return array of the movie objects corresponding to those Ids
  //[{movie object}, {movie object}, ... ]
  return movieIds.map((movieId) => {
    return movieData.movies[movieId];
  });
}

function onMovieDataReceived (rawData, starName) {

  // console.log(rawData);
  // console.log(starName);
  //clean data and get an array of all data separated by row
  const flatMovieArray = cleanAndSplitData(rawData);
  
  /*Parse the flat movie array to build usable movie data objects:
  movieData = {
    movies: {           <--contains all movies stored by the movie's id
      0: {title: Ocean's Eleven, releaseYear: 2001, ... },
      1: {title: Star Wars: Episode IV - A New Hope, releaseYear: 1977, ... },
      ...
    }, 
    starsMovieIds: {    <--maps the stars with the movies they appeared in by movieId
      ...
      "Matt Damon": [0, 2, 3],
      "Mark Hamill": [1]
      ...
    }
  }
  */
  const movieData = movieDataBuilder.makeMovieDataObjects(flatMovieArray);

  //GET MATCHING MOVIES
  //get array of matching movies based on the star's movie ids
  const matchingMovies = findStarsMovies(starName, movieData);

  //GET CORRECT FORMATTED OUTPUT
  //transform movie objects into formatted string
  const output = outputBuilder.getOutput(starName, matchingMovies);

  //DISPLAY OUTPUT
  return output;
} 


module.exports = {
  splitOnNewLine,
  cleanAndSplitData,
  removeReturnCharacters,
  findStarsMovies,
  onMovieDataReceived
}

