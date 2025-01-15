/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    let temp = new ListNode(-1);
    temp.next = head;
    let prevNode = temp;

    while (head && head.next) {
        let firstNode = head
        let secondNode = head.next
        firstNode.next = secondNode.next
        secondNode.next = firstNode
        prevNode.next = secondNode
        prevNode = firstNode
        head = firstNode.next
    }
    return temp.next
};