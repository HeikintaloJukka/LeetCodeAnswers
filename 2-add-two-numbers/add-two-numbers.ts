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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let nums: Array<number> = [];

    let overflow = 0
    let temp: ListNode = new ListNode(0) 
    let current: ListNode = temp;
    let next: ListNode = null;
    while(l1 !== null || l2 !== null || overflow > 0){
        let first = 0;
        let second = 0;

        if(l1 !== null){
            first = l1.val
        }
        if(l2 !== null){
            second = l2.val
        }

        let sum = first + second + overflow;
        if(sum>=10){
            overflow = Math.floor(sum / 10)
            sum=sum%10
        }
        else{
            overflow = 0;
        }

        current.next = new ListNode(sum)
        current = current.next
        console.log(current)

        if(l1 !== null){l1 = l1.next}
        if(l2 !== null){l2 = l2.next}
    }

    return temp.next
};