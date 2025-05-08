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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let nodesB = new Set()

    while(headB !== null){
        nodesB.add(headB)
        headB = headB.next
    }

    while(headA !== null){
        if(nodesB.has(headA)){
            return headA
        }
        headA = headA.next
    }

    return null
};