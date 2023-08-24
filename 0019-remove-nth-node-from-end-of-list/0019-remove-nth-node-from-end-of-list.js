/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const array = []; 
    let curr = head; 
    while (curr) {
        array.push(curr);
        curr = curr.next;  
    }

    console.log(array)
    if (array.length === 1 && n === 1) return null; 
    const removeIndex = (array.length) - n; 
    curr = head; 
    array.splice(removeIndex, 1)
    for (let i = 0; i < array.length; i++) {
        if (!array[i + 1]) array[i].next = null; 
        else array[i].next = array[i + 1]
    }
    return array[0]; 
};