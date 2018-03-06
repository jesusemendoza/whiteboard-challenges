'use strict';

const solution = module.exports = {};

solution.isSameBst = function(one, two) {
  if(typeof one !== 'object' || typeof two !== 'object') return 'not a valid input';
  if((one.left && !two.left) || (!one.left && two.left)) return false;
  if ((one.right && !two.right) || (!one.right && two.right)) return false;
  if (one.left && two.left) return solution.isSameBst(one.left, two.left);
  if (one.right && two.right) return solution.isSameBst(one.right, two.right);
  return true;
};
