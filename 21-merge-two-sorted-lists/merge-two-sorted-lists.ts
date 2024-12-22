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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null){
        return list2
    }
    else if(list2 === null){
        return list1
    }

    let ordered = []
    while(list1 !== null || list2 !== null){
        if(list1 && list2 && list1.val < list2.val){
            ordered.push(list1.val)
            list1 = list1.next
        }
        else if(list1 && list2 && list2.val < list1.val){
            ordered.push(list2.val)
            list2 = list2.next
        }
        else{
            if(list1){
                ordered.push(list1.val)
                list1 = list1.next
            }
            else if(list2){
                ordered.push(list2.val)
                list2 = list2.next
            }
        }
    }

    let ansList: ListNode = new ListNode(ordered[ordered.length-1],null)
    let head = ansList
    for(let i=ordered.length-2;i>=0;i--){
        ansList = new ListNode(ordered[i],ansList)
    }

    return ansList
};