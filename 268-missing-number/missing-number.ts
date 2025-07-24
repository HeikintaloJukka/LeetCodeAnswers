function missingNumber(nums: number[]): number {
    nums.sort((a,b) => a-b)
    let last = nums[0]
    if(last !== 0){
        return 0
    }

    for(let i=1;i<nums.length;i++){
        if(last +1 !== nums[i]){
            return nums[i]-1
        }
        else if(i === nums.length -1){
            return nums[i]+1
        }
        last = nums[i]
    }

    if(nums.length <= 2){
        return 1
    }
    return 999
};