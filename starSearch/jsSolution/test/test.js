var assert = require('assert');
var movies = require('../movies.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('movies.js', function() {
  describe('add', function() {
    it('should return add two numbers', function() {
      assert.equal(movies.add(1,2), 3);
    });
  });
});