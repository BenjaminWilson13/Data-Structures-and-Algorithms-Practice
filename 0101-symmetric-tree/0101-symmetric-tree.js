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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    function inOrder(root) {

        const queue = [];
        queue.push(root);
        const array = []; 
        if (root) {
            array.push(root.val)
        } else {
            array.push(null)
            return array; 
        }

        while (queue.length) {
            const curr = queue.pop();

            if (curr.left !== null) {
                queue.unshift(curr.left)
                array.push(curr.left.val)
            } else {
                array.push(null)
            }
            if (curr.right !== null) {
                queue.unshift(curr.right)
                array.push(curr.right.val)
            } else {
                array.push(null)
            }

        }
        return array;
    }

    function inOrder1(root) {

        const queue = [];
        queue.push(root);
        const array = [];
        if (root) {
            array.push(root.val)
        } else {
            array.push(null)
            return array; 
        }

        while (queue.length) {
            const curr = queue.pop();

            if (curr.right !== null) {
                queue.unshift(curr.right)
                array.push(curr.right.val)
            } else {
                array.push(null)
            }

            if (curr.left !== null) {
                queue.unshift(curr.left)
                array.push(curr.left.val)
            } else {
                array.push(null)
            }

        }
        return array;
    }

    const left = inOrder(root.left)
    const right = inOrder1(root.right)
    for (let index in left) {
        if (left[index] !== right[index]) {
            return false;
        }
    }
    return true;

};