'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Two Equal', function() {
    let bst = {
      value: 3,
      left: {
        value: 4,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    };
    
    let bstTwo = {
      value: 3,
      left: {
        value: 5,
        left: null,
        right: null,
      },
      right: {
        value: 8,
        left: {
          value: 9,
          left: null,
          right: null,
        },
        right: null,
      },
    };
    it('should return not a valid input when a string is used', function() {
      expect(solution.isSameBst('bst', bstTwo)).toEqual('not a valid input');
    });
    it('should return false when an empty object is used', function() {
      expect(solution.isSameBst([], bstTwo)).toEqual(false);
    });
    it('should return the correct value when two equal trees are compared', function() {
      expect(solution.isSameBst(bst, bst)).toEqual(true);
    });
    it('should return the false when 2 unequal trees are compared', function() {
      expect(solution.isSameBst(bst, bstTwo)).toEqual(false);
    });
  });
});