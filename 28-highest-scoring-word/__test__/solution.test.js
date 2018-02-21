'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#Two Largest', function() {
    let testStr0 = 'this a test string and the highest scoring word should be tomorrow';
    let testStr1 = 'this a test string and the highest scoring word should be tomorrow even though there are two tommorow words';

    it('take in a string and return highest scoring word', function() {
      expect(solution.highScore(testStr0)).toEqual('tomorrow');
    });

    it('two words same score return first word', function() {
      expect(solution.highScore(testStr1)).toEqual('tomorrow');
    });
    
    it('validate that a string is input', function() {
      expect(solution.highScore([])).toEqual('requires a string as the input');
    });


  });
});