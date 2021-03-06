'use strict';

class BST{
  constructor(root=null){
    this.root = root;
  }

  insert(nodeToInsert){
    if(this.root === null)
      this.root = nodeToInsert;
    else
      this._insert(this.root,nodeToInsert);
  }

  _insert(root,nodeToInsert){
    if(nodeToInsert.value < root.value){
      // Vinicio - going left
      if(!root.left)
        root.left = nodeToInsert;
      else
        this._insert(root.left,nodeToInsert);
    } else {
      // Vinicio - going right
      if(!root.right)
        root.right = nodeToInsert;
      else
        this._insert(root.right,nodeToInsert);
    }
  }

  find(value){
    return this._find(this.root,value);

  }

  _find(root,value){
    if(!root)
      return null;
    else if(root.value === value)
      return root;
    else if(root.value < value)
      return this._find(root.right,value);
    else
      return this._find(root.left,value);
  }
}

module.exports = BST;

