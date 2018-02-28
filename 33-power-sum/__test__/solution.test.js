'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Two Largest', function() {
   
    it('should take in two numbers and return the correct value', function() {
      expect(solution.powerSum(3, 3)).toEqual(9);
    });
    it('should take in two numbers and return the correct value', function() {
      expect(solution.powerSum(3, 11)).toEqual(27);
    });

    it('should take in one number and one string and return the correct error message', function() {
      expect(solution.powerSum(3, '11')).toEqual('num and pow need to be numbers');
    });

    it('should take in one number and one string and return the correct error message', function() {
      expect(solution.powerSum()).toEqual('num and pow need to be numbers');
    });
    
    

  });
});