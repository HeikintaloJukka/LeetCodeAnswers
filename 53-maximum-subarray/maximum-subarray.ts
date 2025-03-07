function maxSubArray(nums: number[]): number {
    let currentSubarray: number = nums[0];
    let maxSubarray: number = nums[0];

    for(let i=1;i<nums.length;i++){
        currentSubarray = Math.max(nums[i], currentSubarray + nums[i]);
        maxSubarray = Math.max(maxSubarray, currentSubarray);
    }

    return maxSubarray
};