'use strict';

const solution = require('../lib/solution');
const Stack = require('../lib/stack')
require('jest');


describe('Solution Module', function() {
  describe('#Two Largest', function() {
    let addArr = [11,12,13,14,15];
    let testArr = [1,2,3,4,5,6,7,8,9,10];

    it('should take in 10 numbers add 5 remove ', function() {
      expect(solution.twoStackQ(testArr,addArr,13)).toEqual(4);
    });
    // it('should take in an invalid string with an open bracket that doesnt have an close bracket', function() {
    //   expect(solution.curlyString(testStringInvalid1)).toEqual('invalid string');
    // });
    // it('should take in an invalid string with a closed bracket that doesnt have an opening bracket', function() {
    //   expect(solution.curlyString(testStringInvalid2)).toEqual('nothing in que to remove' );
    // });
    

  });
    

  // describe('#Binary Search', function() {
  //   let testArray = []
  //   let kk = 10000000;
  //   for (let i = 0; i < kk; i++) testArray.push(i);
    
  //   let sampleValidResult = {value: 22013, index: 22013}
  //   it('should take in a valid input and return an object', function() {
  //       expect(solution.binarySearch(testArray, 22013)).toEqual(`{value: ${22013}, index: ${22013}}`);
  //   });

  //   it('should return null when a string is put into the n parameter in the function', function() {
  //     expect(solution.binarySearch(testArray, '22013')).toEqual(null);
  // });

  // it('should return null when an empty array is passed into the arr parameter in the function', function() {
  //   expect(solution.binarySearch([], 22013)).toEqual(null);
  // });
  // });
  });
