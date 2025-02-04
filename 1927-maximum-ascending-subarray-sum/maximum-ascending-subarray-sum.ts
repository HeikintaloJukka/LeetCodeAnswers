function maxAscendingSum(nums: number[]): number {
    let largest = nums[0];
    let ascending = nums[0];
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] < nums[i+1]){
            ascending+=nums[i+1]
        }else ascending = nums[i+1]

        largest = Math.max(largest,ascending)
    }
    return largest
};