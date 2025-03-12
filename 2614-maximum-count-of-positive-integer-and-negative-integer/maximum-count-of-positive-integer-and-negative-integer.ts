function maximumCount(nums: number[]): number {
    let pos = 0
    let neg = 0
    for(let i=0, j=nums.length-1;nums[i] < 0 || nums[j] > 0;i++, j-- ){
        if(nums[i] < 0) pos++
        if(nums[j] > 0) neg++
    }
    return Math.max(pos,neg)
};