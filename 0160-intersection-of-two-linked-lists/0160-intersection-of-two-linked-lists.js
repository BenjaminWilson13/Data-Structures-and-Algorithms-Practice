/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    while (headA) {
        let curr = headB
        while(curr) {
            if (headA === curr) return headA; 
            curr = curr.next
        }
        headA = headA.next
    }
    return undefined
};