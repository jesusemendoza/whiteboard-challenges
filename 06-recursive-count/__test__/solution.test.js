'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  function callback(){console.log('done')}
  describe('#Two Largest', function() {
    it('should take in an array of numbers and return the two largest numbers', function() {
      expect(solution.recurse(3,callback)).toEqual(undefined);
    });
    it('should take a rumber as the count value', function() {
      expect(solution.recurse('3',callback)).toEqual('ERR: count is not a number');
    });

    it('should take a rumber as the count value', function() {
      expect(solution.recurse(3,'callback')).toEqual('ERR: callback used is not a function');
    });

    it('should return null if either count or callback are null', function() {
      expect(solution.recurse(3,null)).toEqual(null);
      expect(solution.recurse(null,callback)).toEqual(null);
    });
  });
});