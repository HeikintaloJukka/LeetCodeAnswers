function longestMonotonicSubarray(nums: number[]): number {
    let longest =1;
    let currDecrease=1;
    let currIncrese=1;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] < nums[i+1]){
            currDecrease=1
            currIncrese++
        }
        else if(nums[i] > nums[i+1]){
            currDecrease++
            currIncrese=1
        }else {
            currDecrease = 1;
            currIncrese = 1;
        }

        longest = Math.max(longest,Math.max(currDecrease,currIncrese))
    }

    return longest
};