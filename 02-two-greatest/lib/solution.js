'use strict';

const solution = module.exports = {};

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

solution.twoLargest = function (array) {
    if (array.length < 2) return null;
    let allNumbers = true;
    let  arrayInt = [];
     for (let i = 0; i < array.length; i++) {
      if(typeof array[i] !== 'number') {
        allNumbers = false ;
      }
         arrayInt.push(round(array[i], 0))
     }
   
   if (allNumbers == false) return null;
 
   let arraySorted = arrayInt.sort(function(a, b){return b - a});
   
   //checks for duplicates
   let arrayUnique = Array.from(new Set(arraySorted));
   
   let largest = arrayUnique[0];
   let secondLargest = arrayUnique[1]
    
   return [largest, secondLargest];
 };




