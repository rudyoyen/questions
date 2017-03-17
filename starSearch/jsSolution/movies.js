"use strict";
const fs = require("fs");
const main = require("./main.js");

const fileName = "./movies.txt";
const firstName = process.argv[2] || "";
const lastName = process.argv[3] || "";
const starName = lastName === "" ? firstName : firstName + " " + lastName;



function readMovieSource (file, name, getResults) {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) throw err;
    const results = getResults(data, name);
    if (results != undefined) {
    	console.log(results);
    }
  });
}

function start (callback) {
  if (starName === "") {
    console.log("Please provide a name to search");
    return; 
  }
  readMovieSource(fileName, starName, callback);
}

start(main.onMovieDataReceived);

module.exports = {
	readMovieSource,
	start
};