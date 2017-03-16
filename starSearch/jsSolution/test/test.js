const assert = require('assert');
const movies = require('../movies.js');

//const rawData = 'Ocean\'s Eleven\r\n2001\r\nSteven Soderbergh\r\nGeorge Clooney, Brad Pitt, Matt Damon\r\n\r\nStar Wars: Episode IV - A New Hope\r\n1977\r\nGeorge Lucas\r\nMark Hamill, Harrison Ford, Carrie Fisher\r\n\r\nGood Will Hunting\r\n1997\r\nGus Van Sant\r\nMatt Damon, Robin Williams, Ben Affleck\r\n\r\nSaving Private Ryan\r\n1998\r\nSteven Spielberg\r\nTom Hanks, Matt Damon, Tom Sizemore\r\n\r\nThe Lord of the Rings: The Fellowship of the Ring\r\n2001\r\nPeter Jackson\r\nElijah Wood, Ian McKellen, Orlando Bloom\r\n\r\nForrest Gump\r\n1994\r\nRobert Zemeckis\r\nRobin Wright, Tom Hanks, Gary Sinise'


describe('movies.js', function() {
  describe('removeReturnCharacters', function() {
    it('should return a string with no \\r characters', function() {
      const rawData = 'Ocean\'s Eleven\r\n2001\r\nSteven Soderbergh\r\nGeorge Clooney, Brad Pitt, Matt Damon\r\n';
      const cleanData = movies.removeReturnCharacters(rawData);
      assert.equal(cleanData.search(/\r/), -1);
    });
  });

  describe('splitOnNewLine', function() {
    const rawData = 'Ocean\'s Eleven\n2001\nSteven Soderbergh\nGeorge Clooney, Brad Pitt, Matt Damon\n';
    const cleanData = movies.splitOnNewLine(rawData);

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


});