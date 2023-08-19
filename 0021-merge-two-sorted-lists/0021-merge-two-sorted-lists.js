/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2; 
    if (!list2) return list1; 
    let head; 
    if (list1.val < list2.val) {
        head = list1; 
        list1 = list1.next; 
    } else {
        head = list2; 
        list2 = list2.next; 
    }; 
    let pointer = head; 
    while (list1 || list2) {

        if (!list1) {
            pointer.next = list2; 
            list2 = null; 
            break; 
        }; 

        if (!list2) {
            pointer.next = list1; 
            list1 = null;
            break;  
        }

        if (list1.val < list2.val) {
            pointer.next = list1; 
            pointer = pointer.next; 
            list1 = list1.next; 
        } else {
            pointer.next = list2; 
            pointer = pointer.next; 
            list2 = list2.next; 
        }

    }
    return head; 
};