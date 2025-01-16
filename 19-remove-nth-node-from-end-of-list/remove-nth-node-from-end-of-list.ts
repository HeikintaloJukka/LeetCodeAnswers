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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    let counter = 0;
    let delNode = null
    let checkNode = head
    let prevDelNode = null
    while(checkNode){
        if(counter === n){
            delNode = head
        }

        if(delNode){
            prevDelNode = delNode
            delNode = delNode.next
        }
        
        checkNode = checkNode.next
        if(!checkNode){
            if(counter === 0 && n !== 0){
                return null
            }

            //we are most likely removing 1st node
            if(!delNode){
                return head.next
            }

            //remove node
            prevDelNode.next = delNode.next
        }
        counter++
    }

    return head
};