'use strict';

const solution = require('../lib/solution');
const K = require('../lib/k-ary');
require('jest');

describe('Solution Module', function() {
  describe('#Total Sum', function() {
    let k = new K();
    k.insert(0);
    k.insert(1,0);
    k.insert(2,1);
    k.insert(3,2);
    k.insert(20,0);
    k.insert(14,0);

    
    it('should take in a created K-ary Tree and return the correct solution', function() {
      expect(solution.totalSum(k)).toEqual(40);
    });
    
    let j = new K();
    j.insert(0);
    j.insert(1,0);
    j.insert(2,1);
    j.insert(3,2);
    j.insert(20,0);
    j.insert(14,0);
    j.insert('14',0);
    it('should take in a created k-ary tree with one value as text and ignore non-number values', function() {
      expect(solution.totalSum(j)).toEqual(40);
    });
    
    it('should take in a string and reject it as an invalid input', function() {
      expect(solution.totalSum('5')).toEqual('Invalid input');
    });
  });
});