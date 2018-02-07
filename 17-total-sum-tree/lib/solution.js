'use strict';

const solution = module.exports = {};

solution.totalSum = function (r) {
  if(typeof r !== 'object') return 'Invalid input';
  return 'final solution: ',r.sumTotal();
};
