function maxAbsoluteSum(nums: number[]): number {
    let resPos = nums[0];
    let resNeg = nums[0];
    let maxEndingPos = nums[0];
    let maxEndingNeg = nums[0];

    for (let i = 1; i < nums.length; i++) {
        
        maxEndingPos = Math.max(maxEndingPos + nums[i], nums[i]);
        maxEndingNeg = Math.min(maxEndingNeg + nums[i], nums[i]);
        
        resPos = Math.max(resPos, maxEndingPos);
        resNeg = Math.min(resNeg, maxEndingNeg);
    }

    return Math.max(Math.abs(resPos),Math.abs(resNeg));
};