'use strict';

const Stack = require('./stack')

const solution = module.exports = {};

// let testArr = [1,2,3,4,5,6,7,8,9,10];

solution.twoStackQ = function (arr, addArr, remove) {
  let stackOne = new Stack();
  let stackTwo = new Stack();
  remove = remove + 2;

  for (let i = arr.length; i >= 0; i--) stackOne.push(arr[i]);
  if(addArr.length <= 0 && remove <= 0) return stackOne;
  if(addArr.length >= 0){
    while(stackOne.size > 1) stackTwo.push(stackOne.pop().val);
    for (let i = 0; i <= addArr.length; i++) stackTwo.push(addArr[i]);
    while(stackTwo.size > 0) stackOne.push(stackTwo.pop().val);
  }
  if (remove > 0) for(let i = 0; i < remove; i++ ) stackOne.pop();
  console.log()
  return [stackOne.size, stackOne];
};
// let addArr = [11,12,13,14,15];
// solution.twoStackQ(testArr,addArr,12)


// // solution.curlyString(testString);


// solution.binarySearch = function (arr, n) {
//   if (typeof n !== 'number' || typeof arr !== 'object' || arr.length === 0) return null;
//   let index = Math.floor(arr.length/2);
//   let max = arr.length
//   let min = 0;
//   for (let k = 0; k<(arr.length/(k*1.24)); k++){
//     if (arr[index] === n) return `{value: ${arr[index]}, index: ${index}}`;
//     if (arr[index] > n) max = index;      
//     if (arr[index] < n) min = index;
//     index = Math.floor((max+min)/2)
//   }
//   return 'does not exist';
// }


