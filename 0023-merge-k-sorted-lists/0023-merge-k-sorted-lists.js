/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const array = []; 
    for (let list of lists) {
        while (list) {
            array.push(list.val); 
            list = list.next; 
        }
    }
    console.log(array);
    if (!array.length) return null;  
    array.sort((a, b) => a - b); 

    const head = new ListNode(array[0]); 
    let node = head; 
    for (let i = 1; i < array.length; i++) {
        node.next = new ListNode(array[i])
        node = node.next; 
    }
    return head; 
};