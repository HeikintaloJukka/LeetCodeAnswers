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

    let run = true
    let overflow = 0
    let i = 0;
    while(run){
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

        nums[i] = sum
        console.log(nums)

        if((l1 == null || l1.next == null) && (l2 == null || l2.next == null) && overflow <= 0){
            run = false;
        }
        else{
            if(l1 !== null){l1 = l1.next}
            if(l2 !== null){l2 = l2.next}
            i++
        }
    }

    console.log("ans")
    let answer=[];
    let previous=null;
    for(let j=0;j<nums.length;j++){
        console.log(nums[nums.length-j-1])
        let node = new ListNode(nums[nums.length-j-1],previous)
        answer[j] = node;
        previous = node;
    }
    console.log(answer[answer.length-1])

    return answer[answer.length-1]
};