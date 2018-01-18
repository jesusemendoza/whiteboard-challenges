'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  let arr1 = [5,3,6,7,9,0,22,10];
  let arr2 = [3,5,9,0,6,10,22];
  let arr3 = ['car', 'airplane','horse', 'pony'];
  let dupArr1 = [3,3,3,5,5,5,6,6,6,7,7,7]
  let dupArr2 = [3,3,5,5,5,5,6,7,7,7,7,7,8]
  describe('#Two Largest', function() {
    it('checks that the result is correct', function() {
      expect(solution.contains(arr1,arr2)).toEqual([5, 3, 6, 9, 0, 22, 10]);
    });
    it('checks if no results return no matches', function() {
      expect(solution.contains(arr1,arr3)).toEqual('no matches');
    });
    it('it removes all duplicates and only returns single items', function() {
      expect(solution.contains(dupArr1,dupArr2)).toEqual([3,5,6,7]);
    });
    it('if a null object', function() {
      expect(solution.contains(null,dupArr2)).toEqual(null);
    });
  });
});