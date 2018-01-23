'use strict';

const solution = module.exports = {};

solution.recurse = function (count, callback) {
  console.log('count: ', count, 'type cb: ',typeof callback);
  if(!callback || count == null) return null;
  else if (typeof callback !== 'function') return 'ERR: callback used is not a function';
  else if (typeof count !== 'number') return 'ERR: count is not a number';
  if (count <1) return;
  console.log(count);
  return solution.recurse(count-1,callback);
};





