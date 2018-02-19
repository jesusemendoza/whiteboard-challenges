'use strict';

const utils = require('../lib/utils');
require('jest');

describe('Solution Module', function() {
  describe('#Two Largest', function() {
    let sampleArr = [1,2,3,4,5,6,7];


    it('should be able to pass in a test array, and test function and return the correct answer', function() {
      expect(utils.map(sampleArr, function(arr) {
        arr = arr + 2;
        return arr;
      })).toEqual([3,4,5,6,7,8,9]);
    });
  });
});