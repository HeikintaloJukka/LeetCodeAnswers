function minOperations(nums: number[]): number {
    let ops = 0
    for(let i=0;i<nums.length-2;i++){
        if(nums[i] === 0){
            nums[i] = 1
            nums[i+1] === 0 ? nums[i+1]=1 : nums[i+1]=0
            nums[i+2] === 0 ? nums[i+2]=1 : nums[i+2]=0
            ops++
        }
    }

    if(nums.includes(0)){
        return -1
    }

    return ops
};