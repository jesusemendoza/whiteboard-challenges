'use stict';

const solution = require('../lib/solution');

let arr1 = ['a','b','z'];
let arr0 = ['z','t','r'];
let invArr = 'f, e, d';
let invArr2 ='d, e, f';
let arr2 = ['a','r', 0, 5];
let arr3 = ['r', 'c', 5, 8];

describe ('Solution Module', () => {
  describe ('#arrIntersection', () => {
    it  ('should accept both strings and numbers', () => {
      expect(solution.arrIntersection(arr3, arr2)).toEqual(['r', 5]);
    });
    it('should return an array with the matching value', () => {
      expect (solution.arrIntersection(arr1,arr0)).toEqual(['z']);
    });
    it ('should contain a value in the paramaters', () => {
      expect (solution.arrIntersection()).toEqual('Not Array');
    });
    it ('should only accept arrays', () => {
      expect(solution.arrIntersection(invArr, invArr2)).toEqual('Not Array');
    });
  });
});