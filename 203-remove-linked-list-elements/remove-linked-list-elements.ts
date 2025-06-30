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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let begin = head
    while(head != null && head.next != null){
        if(head.next.val === val){
            head.next = head.next.next
        }
        else{
            head = head.next
        }
    }

    if(begin != null && begin.val === val){
        begin = begin.next
    }

    return begin
};