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
 * @return {number}
 */
var minDepth = function(root) {
    function dfs(root, depth = 0) {
        const array = []; 
        depth++; 
        if (root === null) return array; 
        if (root.left === null && root.right === null) {
            array.push(depth)
        }
        array.push(...dfs(root.left, depth)); 
        array.push(...dfs(root.right, depth)); 
        return array; 
    }
    const res = dfs(root)
    if (!res.length) return 0
    return res.sort((a, b) => a - b)[0]
};