'use strict';
const solution = module.exports = {};

solution.maxChild = (tree) => {
  if(!tree) return 'input required';
  if(typeof tree !== 'object') return 'invalid tree';
  let maxChildren = tree.root;
  tree.breadthFirst(current => {
    if(current.children.length > maxChildren.children.length) {
      maxChildren = current;
    }
  });
  return maxChildren;
};