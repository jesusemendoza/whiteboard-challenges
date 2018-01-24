#Documentation for Completed Module
Author: Jesus
Title: Two-Largest

Modules:
solution.circular(list)
    -returns false if list is a valid list
    -returns true if the linked list is circular
    -ensures that the list is actually a list
    -ensures that the list is an object

## Whiteboard Challenge 02

Write a function which accepts a linked list as it's only argument, and returns true or false. - If the linked list is circular (it has no end), return true - Else return false


## Code Solution

```'use strict';

const solution = module.exports = {};

solution.circular = function (list) {
  if(typeof list !== 'object') return null;
  if(!list.next) return 'not much of a list buddy';
  let itr1 = list;
  let itr2 = list;
  while(itr1.next && itr2.next.next) {
    itr1 = itr1.next;
    itr2 = itr2.next.next;
    if (itr1 === itr2) return true;
  }
  return false;
};