'use strict'

let testArr = [1,2,3,4,5]; 

function test (num) {
    let min = Math.min(...num);
    let max = Math.max(...num);
    let avg = num.reduce((prev, curr) => prev + curr )/num.length;
  return {max, min, avg}
}

test(testArr)