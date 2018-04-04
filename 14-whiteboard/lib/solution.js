'use strict';

const solution = module.exports = {};
const Stack = require('./stack');  

solution.dedupe = function (head) {
  if(typeof head !== 'object') {
    return null;
  }
  if(!head.next) {
    return 'not a valid sll';
  }
  let stacky = new Stack();

  let curr = head;
  let ahead = head.next;
  stacky.push(curr.val);
  while(curr.next){
    if(stacky.peek().val !== ahead.val) {
      stacky.push(ahead.val);
    }
   
    curr = curr.next;
    ahead = ahead.next;
  }
  return stacky;
};