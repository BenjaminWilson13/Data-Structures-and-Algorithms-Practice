/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    function treeTraverse(root) {
        const array = [];
        if (root === null) {
            array.push(null);
            return array
        }
        array.push(root.val)
        array.push(...treeTraverse(root.left));
        array.push(...treeTraverse(root.right));
        return array;
    }

    const leftNodes = treeTraverse(p);
    const rightNodes = treeTraverse(q);

    for (let index in leftNodes) {
        if (leftNodes[index] !== rightNodes[index]) {
            return false;
        }
    }
    return true;
};