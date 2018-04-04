'use strict';

const solution = module.exports = {};

solution.arrIntersection = (arr0, arr1) => {
  if (typeof arr1 !== 'object' || typeof arr0 !== 'object') {
    return 'Not Array';
  }
  let newArr = [];
  arr0.map(val => {
    for (let i = 0; i < arr1.length; i++) {
      if (val === arr1[i]) {
        newArr.push(arr1[i]);
      }
    }
  });
  return newArr;
};
