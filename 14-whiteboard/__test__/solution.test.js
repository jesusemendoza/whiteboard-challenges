'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Two Largest', function() {
    let node1 = {val : 5,
      next : {
        val : 4,
        next : {
          val : 3,
          next : {
            val : 2,
            next : {
              val : 1,
              next : null,
            },
          },
        },
      },
    };
    
    let node2 = {val : 5,
      next : {
        val : 4,
        next : {
          val : 3,
          next : {
            val : 3,
            next : {
              val : 1,
              next : null,
            },
          },
        },
      },
    };
    let nodeSol1 = {'maxSize': 1024, 'size': 4, 'top': {'next': {'next': {'next': {'next': null, 'val': 5}, 'val': 4}, 'val': 3}, 'val': 1}}
    let nodeSol2 = {'maxSize': 1024, 'size': 5, 'top': {'next': {'next': {'next': {'next': {'next': null, 'val': 5}, 'val': 4}, 'val': 3}, 'val': 2}, 'val': 1}};

    it('should take in a created SLL and return the correct value', function() {
      expect(solution.dedupe(node1)).toEqual(nodeSol2);
    });
    it('should take in a created SLL and return the correct value', function() {
      expect(solution.dedupe(node2)).toEqual(nodeSol1);
    });
    it('should take in a null parameter and return null', function() {
      expect(solution.dedupe()).toEqual(null);
    });
    it('should take in an array and return not a valid sll', function() {
      expect(solution.dedupe([])).toEqual('not a valid sll');
    });
  });
});