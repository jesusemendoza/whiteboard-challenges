'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Two Largest', function() {
    it('should take in an array of numbers and return the two largest numbers', function() {
      expect(solution.twoLargest([1,2,3,4,5,6,7,8])).toEqual([8,7]);
    });

    it('should take in an array of numbers with one string and return null', function() {
        expect(solution.twoLargest([1,2,3,4,5,'7',7,8])).toEqual(null);
      });

    it('should take in an array of float numbers and return the 2 largest numbers rounded to the nearest interger', function() {
        expect(solution.twoLargest([1,2.2,3.6,4.7,5.9,3.8,7.9,8.6])).toEqual([9,8]);
      }); 
      
    it('should take in an array of numbers with some being duplicates and remove the duplicates so the two numbers returned are always different', function() {
        expect(solution.twoLargest([2,3,4,4,4,5,5])).toEqual([5,4]);
      }); 

    it('should take in an array of less than 2 numbers and return null', function() {
        expect(solution.twoLargest([2])).toEqual(null);
      });   
  });
});