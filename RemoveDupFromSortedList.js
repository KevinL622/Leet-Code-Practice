/*Remove Duplicates from a sorted linked list

Given a sorted linked list, delete all duplicates such that each element
appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var currentNode = head;
    while (currentNode && currentNode.next){
        if(currentNode.val == currentNode.next.val){
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        };
    };
    return head;
};


/* Other Solution
var deleteDuplicates = function(head) {
    let res = head;
    if(head === null){
        return head;
    } else {
        while (head.next){
            if(head.next.val === head.val){
                head.next = head.next.next;
            } else {
                head = head.next
            }
        }
        return res;
    }
};
*/
