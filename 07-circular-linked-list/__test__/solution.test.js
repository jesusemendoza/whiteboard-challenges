'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Circular', function() {
    let circularList = {value: 0,next: null};
    circularList.next = circularList;
    let myList = {value: 2, next: {value: 2, next:{value: 3, next: {value: 4, next: null }}}};
    let single = {value: 2, next: null};
    it('should take in a string and return null', function() {
      expect(solution.circular('i am an object')).toEqual(null);
    });
    it('should take in a valid linked list and return false', function() {
      expect(solution.circular(myList)).toEqual(false);
    });

    it('should take in a circular linked list and return true', function() {
      expect(solution.circular(circularList)).toEqual(true);
    });

    it('should take in an array of numbers and return the two largest numbers', function() {
      expect(solution.circular(single)).toEqual('not much of a list buddy');
    });
  });
});

