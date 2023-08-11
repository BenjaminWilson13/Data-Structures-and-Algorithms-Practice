/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
    function GCD(num1, num2) {
        const lowest = Math.min(num1, num2)

        for (let i = lowest; i >= 1; i--) {
            if (num1 / i === Math.floor(num1 / i) && num2 / i === Math.floor(num2 / i)) {
                return i
            }
        }
    }

    let node = head; 
    while (node.next) {
        const newNode = new ListNode(GCD(node.val, node.next.val)); 
        newNode.next = node.next; 
        node.next = newNode; 
        node = newNode.next; 
    }
    return head; 
};