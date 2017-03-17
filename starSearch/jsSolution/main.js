"use strict";

const util = require("util"); 
const movieDataParser = require("./movieDataParser.js");
const outputBuilder = require("./outputBuilder.js");


function cleanAndSplitData (data) {
  //remove all return characters then split string into array so that each line is an element
  return data.replace(/\r/g, "").split("\n");
}

function findStarsMovies (name, movieData) {
	//get the movieIds for all movies in which the star appeared
	const movieIds = movieData.starsMovieIds[name] || [];  //[0, 2, 3]

  //return array of the movie objects corresponding to those Ids
  //array is sorted by releaseYear oldest to most recent
  return movieIds.map((movieId) => {
    return movieData.movies[movieId];
  }).sort((a, b) => { return a.releaseYear - b.releaseYear });
}

function onMovieDataReceived (rawData, starName) {
  //clean data and get an array of all data separated by new line characters
  const flatMovieArray = cleanAndSplitData(rawData);
  
  //Parse the flat movie array to build two movie data objects:
  /**************************************************************************** 
  movieData = {
    movies: {           <--contains all movies, keys are movieIds and values are movie objects
      0: {title: Ocean's Eleven, releaseYear: 2001, ... },
      1: {title: Star Wars: Episode IV - A New Hope, releaseYear: 1977, ... },
      ...
    }, 
    starsMovieIds: {    <--maps the stars with the movies they appeared using movieIds
      ...
      "Matt Damon": [0, 2, 3],
      "Mark Hamill": [1]
      ...
    }
  }
  ****************************************************************************/
  const movieData = movieDataParser.makeMovieDataObjects(flatMovieArray);

  //get array of matching movies based on the star's movie ids
  const matchingMovies = findStarsMovies(starName, movieData);

  //transform movie objects into formatted string
  const output = outputBuilder.getOutput(starName, matchingMovies);

  return output;
} 


module.exports = {
  cleanAndSplitData,
  findStarsMovies,
  onMovieDataReceived
}

