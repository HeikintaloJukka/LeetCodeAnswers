/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    //find reverse first descend
    let target = null
    for(let i=nums.length-1;i>0;i--){
        if(nums[i-1] < nums[i]){
            target = i-1
            break;
        }
    }

    if(target != null){
        //swap with one just above
        let swap = nums.length-1
        for(let j=target+1;nums[target] < nums[j];j++){
            swap = j
        }

        let tmp = nums[target]
        nums[target] = nums[swap]
        nums[swap] = tmp

    }else target = -1

    //reverse beyond swapped point
    for(let i=target+1,j=nums.length-1;i<j;i++,j--){
        let tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
    }
};