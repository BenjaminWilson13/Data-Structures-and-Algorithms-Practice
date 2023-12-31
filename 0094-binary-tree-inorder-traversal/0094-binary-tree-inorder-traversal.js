/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const array = []; 
    if (root === null) return array;
    array.push(...inorderTraversal(root.left)); 
    array.push(root.val)
    array.push(...inorderTraversal(root.right)); 
    return array; 
};