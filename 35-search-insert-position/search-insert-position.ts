function searchInsert(nums: number[], target: number): number {
    let pivot
    let left =0
    let right = nums.length-1
    while(left <= right){
        pivot = left + Math.floor((right-left) / 2)
        if(nums[pivot] === target){
            return pivot
        }else if(target < nums[pivot]){
            right = pivot - 1
        }
        else {
            left = pivot + 1
        }
    }

    return left
};