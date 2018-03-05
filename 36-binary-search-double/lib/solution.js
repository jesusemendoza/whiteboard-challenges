'use strict';
const BST = require('./bst');
const TreeNode = require('./tn');
const solution = module.exports = {};

solution.isSameBst = function (bst, bstTwo) {
  console.log('before');
  if(!bst || !bstTwo){
    console.log('after', bst);
    return true;
  }
  if((!bst && bstTwo) || (!bstTwo && bst) || (bst && bstTwo && bst.value !== bstTwo.value)){
    console.log('before flase');
    return false;
  }
  return (solution.isSameBst(bst.left, bstTwo.left) && solution.isSameBst(bst.right, bstTwo.right));
};

let bst = new BST();
bst.insert(new TreeNode(5));
bst.insert(new TreeNode(4));
bst.insert(new TreeNode(8));
bst.insert(new TreeNode(16));

let bstTwo = new BST();
bstTwo.insert(new TreeNode(5));
bstTwo.insert(new TreeNode(2));
bstTwo.insert(new TreeNode(6));
bstTwo.insert(new TreeNode(16));

solution.isSameBst(bst, bstTwo);