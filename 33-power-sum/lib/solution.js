'use strict';

const solution = module.exports = {};

solution.powerSum = function (num, pow) {
  if(typeof num !== 'number' || typeof pow !== 'number' ) return 'num and pow need to be numbers';
  return Math.pow(num,pow).toString().split('').reduce((a,b)=> a + parseInt(b),0);
};