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

function hasCycle(head: ListNode | null): boolean {
    let nodesSeen = new Set();
    let current = head;
    while(current != null){
        if(nodesSeen.has(current)){
            return true
        }
        nodesSeen.add(current)
        current = current.next;
    }
    return false
};