/*
Merge two sorted linked lists and return it as a new list. The new list should
be made by splicing together the nodes of the first two lists.

Example
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = { val : -1, next : null }; // create dummy node to get started
    let runner = head;

    while(l1 && l2) {
        if(l1.val > l2.val) {
            runner.next = l2;
            l2 = l2.next;
        } else {
            runner.next = l1;
            l1 = l1.next;
        }
        runner = runner.next;
    }

    // l1 = 1->2->3, l2 = 10->20->30
    // In that case l1, will point to null and while loop will break
    // Simply point runner to l2. We do not have to add individual nodes
    runner.next = l1 || l2;

    return head.next;
};
