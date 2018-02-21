'use strict';

const solution = module.exports = {};

solution.highScore = function (x) {   
  if (typeof x !== 'string') return 'requires a string as the input';
  let finalValues = [];
  let tempWords = x.split(' ');
  function Words(word, score) {
    this.word = word;
    this.score = score;
  }
  for(let i=0; i < tempWords.length; i++) {
    let score = 0;
    let str = tempWords[i].split(''); 
    for(let j=0; j < str.length; j++) {
      score += str[j].charCodeAt(0)-96;
    }
    finalValues.push(new Words(tempWords[i], score));
  }
      
  function compare(a,b) {
    if (a.score < b.score)return -1;
    if (a.score > b.score) return 1;
    return 0;
  }
  finalValues.sort(compare);
  return finalValues[finalValues.length-1].word;     
};