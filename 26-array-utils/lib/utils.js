'use strict';

const utils = module.exports = {};

utils.map = function (array, callback) {
  // if (!SLL || typeof SLL !== 'object' || typeof n !== 'number') return null;
  if(typeof callback!== 'function') return 'callback not a function';
  let solution=[];
  for(let i = 0; i < array.length; i++){
    solution.push(callback(array[i]));
  }
  return solution;
};

utils.reduce = function (array, callback, initial) {
  if(typeof callback!== 'function') return 'callback not a function';
  let solution= initial;
  for(let i = 0; i < array.length; i++){
    solution += callback(array[i]);
  }
  return solution;
};


utils.filter = function(array,callback, initial){
  let solution = initial;
  if(typeof callback!== 'function') return 'callback not a function';
  for(let i = 0; i < array.length; i++){
    let value = callback(array[i]);
    if (value !== null)solution.push(value);
  }
  return solution;
};




