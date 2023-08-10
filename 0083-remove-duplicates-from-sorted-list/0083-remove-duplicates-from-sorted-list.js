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
var deleteDuplicates = function (head) {
    if (head === null || head.length === 0) {
        return head; 
    }
    let currNode = head;
    let nextNode = head.next;
    while (nextNode !== null) {
        console.log(currNode.val, nextNode.val)
        if (currNode.val === nextNode.val) {
            console.log(true)
            if (nextNode.next === null) {
                currNode.next = null;
                nextNode = null; 
            } else {
                nextNode = nextNode.next;
            }
        } else {
            console.log(false)
            currNode.next = nextNode;
            currNode = nextNode;
            nextNode = nextNode.next;
        }
    }
    return head;
};