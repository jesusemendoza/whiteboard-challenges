'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Two Largest', function() {
    it('should take in a number and return a number with the fibonacci sequence at that number', function() {
      expect(solution.fibIter(2)).toEqual(1);
    });
    it('should take in a number and return a number with the fibonacci sequence at that number', function() {
      expect(solution.fibIter(8)).toEqual(21);
    });
    it('should take in a string value and return null', function() {
      expect(solution.fibIter('')).toEqual(null);
    });
    it('should take in a number and return a number with the fibonacci sequence at that number', function() {
      expect(solution.fibIter(0)).toEqual(0);
    });
  });
  describe('#Two Largest', function() {
    it('should take in a number and return a number with the fibonacci sequence at that number', function() {
      expect(solution.fibRec(2)).toEqual(1);
    });
    it('should take in a number and return a number with the fibonacci sequence at that number', function() {
      expect(solution.fibRec(8)).toEqual(21);
    });
    it('should take in a string value and return null', function() {
      expect(solution.fibRec('')).toEqual(null);
    });
    it('should take in a number and return a number with the fibonacci sequence at that number', function() {
      expect(solution.fibRec(0)).toEqual(0);
    });
  });
});