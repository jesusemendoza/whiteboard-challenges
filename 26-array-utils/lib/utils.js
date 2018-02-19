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
  return console.log(solution);
};

let sampleArr = [0,1,2,3,4];
utils.reduce(sampleArr, function (a) {
  return a;
}, 10);


// var sum = [0, 1, 2, 3].reduce(function (a, b) {
//   return a + b;
// }, 0);




