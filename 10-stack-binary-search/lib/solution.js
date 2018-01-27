'use strict';

const Stack = require('./stack')

let testStack = new Stack();
let testString = '{Spicy} jalapeno bacon ipsum dolor {amet spare} {{{ribs}}} ball tip drumstick, {venison} flank sausage shank alcatra. Chuck corned beef sirloin prosciutto jerky buffalo tongue short loin bresaola short ribs. Rump ribeye spare ribs t-bone leberkas cupim kielbasa. Strip steak prosciutto jerky short loin chicken chuck flank pastrami boudin alcatra porchetta pork cupim. Beef ribs salami ham drumstick leberkas alcatra.';

const solution = module.exports = {};

solution.curlyString = function (str) {
  if (typeof str !== 'string') return null;
  for (let i = 0; i < str.length; i++) {
    if(str[i]=== '{') testStack.push('{');
    if(str[i]=== '}') {
    if(testStack.size === 0) return console.log('nothing in que to remove')  
    testStack.pop();
    }
  }
  console.log(testStack)
  if(testStack.top) return console.log('invalid string')
  return console.log('valid')
  
};

solution.curlyString(testString);

// let testArray = [0,10,20,30,40,50,60,70,80,90]
// solution.binarySearch = function (arr, n) {
//   let location = Math.floor(arr.length/2);
//   let max = arr.length
//   let min = 0;
//   let range = max-min;
//   for (let k = 0; k<arr.length; k++){
//     console.log('itr: ', k)
//     console.log('range: ',range)
//     console.log('value: ',arr[location])
//     if (arr[location] > n)  max = location;
//     if (arr[location] < n)  min = location;
//     console.log('max: ',max, 'min: ',min)
//     if (arr[location] === n) return console.log(`{value: ${arr[location]}, index: ${location}}`);
//     range = max-min;
//     location = Math.floor(range/2)
//   }
//   return console.log('does not exist');
// }

// solution.binarySearch(testArray,10);