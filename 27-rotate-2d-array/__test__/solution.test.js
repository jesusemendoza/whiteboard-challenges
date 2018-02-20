'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Rotation', function() {
    let testArr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    let testSol = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ];
    it('should take in a created SLL and return the correct value from the end', function() {
      expect(solution.rotate(testArr)).toEqual(testSol);
    });

    it('should take in a created SLL and return the correct value from the end', function() {
      expect(solution.rotate('array')).toEqual('input not an array');
    });

    it('should take in a created SLL and return the correct value from the end', function() {
      expect(solution.rotate([])).toEqual('invalid array');
    });
  });
});