const assert = require('assert');
const utils = require('./utils.js');
const movies = require('../movies.js');
const main = require('../main.js');
const movieDataBuilder = require('../movieDataBuilder.js');



describe('movies.js', function () {
  describe('readMovieSource', function() {
  	let fileSuccessfullyRead = false;
  	let actualRawData;
  	let actualName;
  	let expectedName = "starName";

  	before(function (done) {
  		function onSuccess (data, name) {
  			fileSuccessfullyRead = true;
  			actualRawData = data;
  			actualName = name;
  			done();
  		}
  		movies.readMovieSource("./movies.txt", expectedName, onSuccess);
  	});
  		
    it('should read the source file without error', function() { 
	   	assert.equal(fileSuccessfullyRead, true);
    });
    it('should pass the correct raw data to the callback', function() { 
    	const expectedRawData = utils.rawData;
	   	assert.equal(actualRawData, expectedRawData);
    });
    it('should pass the correct star name to the callback', function() { 
	   	assert.equal(actualName, expectedName);
    });
  });

  // describe('start', function() {
  //   it('should return error message if no name is passed in', function() {
  //     const actual = movies.start(null, "", null);
  //     const expected = "Please provide a name to search";
  //     assert.equal(actual, expected);
  //   });
  // });
});

describe('main.js', function() {
  describe('removeReturnCharacters', function() {
    it('should return a string with no \\r characters', function() {
      const rawData = 'Ocean\'s Eleven\r\n2001\r\nSteven Soderbergh\r\nGeorge Clooney, Brad Pitt, Matt Damon\r\n';
      const cleanData = main.removeReturnCharacters(rawData);
      assert.equal(cleanData.search(/\r/), -1);
    });
  });

  describe('splitOnNewLine', function() {
    const rawData = 'Ocean\'s Eleven\n2001\nSteven Soderbergh\nGeorge Clooney, Brad Pitt, Matt Damon\n';
    const cleanData = main.splitOnNewLine(rawData);

    it('should return array with one element for each new line', function() {
      assert.equal(cleanData.length, 5);
    });

    it('each element should have 0 \\n characters', function() {
      const newlineCharCount = cleanData.reduce((acc, newLine) => {
        return newLine.search(/\n/);
      }, 0);
      assert.equal(newlineCharCount, -1);
    });

  });

  describe('findStarsMovies', function () {
  	it('should return empty array if no movies match', function() { 
    	const actualOutput = main.findStarsMovies("badName", utils.moviesData).length;
    	const expectedOutput = 0;
	   	assert.equal(actualOutput, expectedOutput);
    });

    it('should return an array with one element if there is one matching movie', function() { 
    	const actualOutput = main.findStarsMovies("George Clooney", utils.moviesData).length;
    	const expectedOutput = 1;
	   	assert.equal(actualOutput, expectedOutput);
    });

    it('should return an array with at least one element if there is more than one matching movie', function() { 
    	const actualOutput = main.findStarsMovies("Matt Damon", utils.moviesData).length;
    	const expectedOutput = 3;
	   	assert.equal(actualOutput, expectedOutput);
    });
  });

  describe('onMovieDataReceived', function() {
    it('should correctly return results for a star with three movies', function() { 
    	const starName = "Matt Damon";
    	const actualOutput = main.onMovieDataReceived(utils.rawData, starName);
    	const expectedOutput = utils.output[starName];
	   	assert.equal(actualOutput, expectedOutput);
    });

    it('should correctly return results for a star with two movies', function() { 
    	const starName = "Tom Hanks";
    	const actualOutput = main.onMovieDataReceived(utils.rawData, starName);
    	const expectedOutput = utils.output[starName];
	   	assert.equal(actualOutput, expectedOutput);
    });

    it('should correctly return results for a star with one movie', function() { 
    	const starName = "Carrie Fisher";
    	const actualOutput = main.onMovieDataReceived(utils.rawData, starName);
    	const expectedOutput = utils.output[starName];
	   	assert.equal(actualOutput, expectedOutput);
    });

		it('should correctly return results for a star with one word name and no movies', function() { 
    	const starName = "oneWrongName";
    	const actualOutput = main.onMovieDataReceived(utils.rawData, starName);
    	const expectedOutput = "0 Movies Featuring oneWrongName";
	   	assert.equal(actualOutput, expectedOutput);
    });    
  });
});