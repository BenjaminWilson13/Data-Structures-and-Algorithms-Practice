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
var maxDepth = function (root) {
    function depthFirstSearch(root, depth = 0) {
        depth++;
        const array = [];
        if (root === null) {
            return array;
        }
        array.push(depth)
        array.push(...depthFirstSearch(root.left, depth))
        array.push(...depthFirstSearch(root.right, depth))
        return array;
    }

    const res = depthFirstSearch(root); 
    if (res.length === 0) return 0; 
    return res.sort((a, b) => b - a)[0]
};