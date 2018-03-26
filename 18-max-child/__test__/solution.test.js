'use strict';

const Tree = require('../lib/k-ary-tree.js');
const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#solution', () => {
    let tree = new Tree();
    tree.insert(1).insert(2, 1).insert(3, 1).insert(4, 2).insert(5, 2).insert(6, 2).insert(7, 2).insert(8, 3);

    let tree2 = new Tree();
    tree2.insert(1).insert(2, 1).insert(3, 1).insert(4, 2).insert(5, 2);

    describe('Valid arguments', () => {
      it('should return a node', () => {
        expect(solution.maxChild(tree)).toBeInstanceOf(Object);
      });
      it('should return the node with most children', () => {
        expect(solution.maxChild(tree).children.length).toEqual(4);
      });
      it('should return the first instance of a node with an equal amount of most children', () => {
        expect(solution.maxChild(tree2).val).toEqual(1);
      });
    });
    describe('Invalid arguments', () => {
      it('should return invalid tree if argument is not an object', () => {
        expect(solution.maxChild(1)).toEqual('invalid tree');
        expect(solution.maxChild('a')).toEqual('invalid tree');
      });
      it('should return input required if no argument is passed', () => {
        expect(solution.maxChild()).toEqual('input required');
      });
    });
  });
});