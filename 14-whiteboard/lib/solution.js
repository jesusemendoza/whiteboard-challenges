'use strict';

const solution = module.exports = {};

let node = {val : 5,
  next : {
    val : 4,
    next : {
      val : 3,
      next : {
        val : 2,
        next : {
          val : 1,
          next : null,
        },
      },
    },
  },
};
  

solution.dedupe = function (head) {
  if(!head)null;

  let curr = head;
  let ahead = head.next;
  while(curr.next){

    console.log(curr.val, ' : curr');
    curr = curr.next;
    console.log(ahead.val,' : ahead');
    ahead = ahead.next;
  }
  return curr;
  
};

solution.dedupe(node);