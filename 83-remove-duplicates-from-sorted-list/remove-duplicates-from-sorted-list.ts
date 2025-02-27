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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummy = new ListNode()
    dummy.next = head

    while(head !== null){

        if(head.next && head.next.val === head.val){
            head.next = head.next.next
        }
        else head = head.next
    }

    return dummy.next
};