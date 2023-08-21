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
var postorderTraversal = function(root) {
    const array = []; 
    if (!root) return array; 
    array.push(...postorderTraversal(root.left))
    array.push(...postorderTraversal(root.right));
    array.push(root.val)
    return array; 
}