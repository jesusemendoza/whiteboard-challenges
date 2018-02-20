'use strict';

const utils = require('../lib/utils');
require('jest');

describe('Utils Module', function() {
  describe('#Utils module', function() {
    let sampleArr = [1,2,3,4,5,6,7];
    it('should be able to pass in a test array, and test function and return the correct answer', function() {
      expect(utils.map(sampleArr, function(arr) {
        arr = arr + 2;
        return arr;
      })).toEqual([3,4,5,6,7,8,9]);
    });
    function isBigEnough(value) {
      if(value >= 10) return value;
      return null;
    }
    var filter = [12, 5, 8, 130, 44];
    utils.filter(filter, isBigEnough,[]);

    it('should be able to pass in a test array and filter all numbers less than 10', function() {
      expect(utils.filter(filter, isBigEnough, [])).toEqual([12,130,44]);
    });
    utils.reduce(sampleArr, function (a) {
      return a;
    }, []);

    it('should be able to pass in a test array of numbers with a starting value of 10 and get the corect answer', function() {
      expect(utils.reduce(sampleArr, function (a) {
        return a;
      }, 10)).toEqual(38);
    });
  });
});