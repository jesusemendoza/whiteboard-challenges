'use strict';

const solution = module.exports = {};

solution.fibIter = function (n) {
  if(typeof n !== 'number') return null;
  let finalArr = [0,1];
  for(let i =1; i < n;i++){
    finalArr.push(finalArr[i] + finalArr[i-1]);
  }
  return finalArr[n];
};
solution.fibRec = function(n){
  if(typeof n !== 'number') return null;
  if(n<=1)return n;
  else return solution.fibRec(n-1) + solution.fibRec (n-2);  
};