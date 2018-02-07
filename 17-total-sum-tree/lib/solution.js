'use strict';

const solution = module.exports = {};
const K = require('./k-ary');

let k = new K();
k.insert(0);
k.insert(1,0);
k.insert(2,1);
k.insert(3,2);
k.insert(20,0);
k.insert(14,0);
k.insert('14',0);
solution.totalSum = function (r) {
  if(typeof r !== 'object') return console.log('no bueno');
  return console.log('final solution: ',r.sumTotal());
};

solution.totalSum(k);