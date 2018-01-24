'use strict';

const solution = module.exports = {};

solution.circular = function (list) {
  if(typeof list !== 'object') return null;
  if(!list.next) return 'not much of a list buddy';
  let itr1 = list;
  let itr2 = list;
  while(itr1.next && itr2.next.next) {
    itr1 = itr1.next;
    itr2 = itr2.next.next;
    if (itr1 === itr2) return true;
  }
  return false;
};







