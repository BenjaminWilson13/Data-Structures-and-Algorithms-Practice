/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head;  
    while (true) {
        if (!head) break; 
        if (head.val === val) {
            head = head.next
        } else if (head.val !== val) {
            break; 
        }
    }

    let currentNode = head;
    while (currentNode && currentNode.next) {
        let nextNode = currentNode.next; 
        while (true) {
        if (currentNode.next && currentNode.next.val === val) {
            currentNode.next = currentNode.next.next; 
        } else break; 
        }
        currentNode = currentNode.next
    }
    return head; 
};