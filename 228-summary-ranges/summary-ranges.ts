function summaryRanges(nums: number[]): string[] {
    let ranges = []
    let rangeStart = nums[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i+1] !== nums[i]+1){
            if(rangeStart === nums[i]){
                ranges.push(""+nums[i])
            }else ranges.push(rangeStart+"->"+nums[i])
            rangeStart = nums[i+1]
        }
    }

    return ranges
};