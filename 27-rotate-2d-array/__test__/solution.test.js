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

    let testArr1 = [
      [1.01, 2.01, 3.01],
      [4.01, 5.01, 6.01],
      [7.01, 8.01, 9.01],
    ];

    let testSol1 = [
      [3.01, 6.01, 9.01],
      [2.01, 5.01, 8.01],
      [1.01, 4.01, 7.01],
    ];

    
    it('should take in a 2d array and rotate it 90 degrees', function() {
      expect(solution.rotate(testArr)).toEqual(testSol);
    });

    it('should take in a 2d array with floating point numbers and rotate it 90 degrees', function() {
      expect(solution.rotate(testArr1)).toEqual(testSol1);
    });

    it('should take in a string and return an error', function() {
      expect(solution.rotate('array')).toEqual('input not an array');
    });

    it('should take in an empty array and return an error', function() {
      expect(solution.rotate([])).toEqual('invalid array');
    });
  });
});