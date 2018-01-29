'use strict';

const solution = module.exports = {};

solution.findMissing = function (n) {
  if (typeof n !== 'object') return null;
  let t = 5050;
  n = n.reduce((a, b) => a + b, 0)
  return t-n  
}

 