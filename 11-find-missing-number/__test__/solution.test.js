'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Two Largest', function() {
    let arr = [];
    for (let i=1; i<101; i++) arr.push(i);
    arr.splice(23-1 ,1);

    it('should take in a created SLL and return the correct value from the end', function() {
      expect(solution.findMissing(arr)).toEqual(23);
    });

    it('should take in number and return null', function() {
      expect(solution.findMissing(5)).toEqual(null);
    });

    it('should take in a string and return null', function() {
      expect(solution.findMissing('arr')).toEqual(null);
    });

  });
});