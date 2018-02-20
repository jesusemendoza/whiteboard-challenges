'use strict';

const solution = module.exports = {};
solution.rotate = function (arr) {
  if(typeof arr !== 'object') return 'input not an array';
  if(arr.length === 0) return 'invalid array';
  let finalArr = [];
  for(let i = arr.length-1; i >= 0; i--){
    let tempArr = [];
    for(let k = 0; k <arr.length;k++){
      tempArr.push(arr[k][i]);
    }
    finalArr.push(tempArr);
  }
  return finalArr;
};
