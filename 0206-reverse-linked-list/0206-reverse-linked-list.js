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
var reverseList = function(head) {
    const array = []; 
    while (head) {
        array.push(head); 
        head = head.next; 
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (i === 0) {
            array[i].next = null
        } else {
            array[i].next = array[i - 1] 
        }
    }
    return array.length ? array[array.length - 1] : head
};