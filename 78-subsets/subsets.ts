function subsets(nums: number[]): number[][] {
    let subset = []

    let bt = (index, currentSubset, nums) => {
        subset.push([...currentSubset])
        for(let i=index;i<nums.length;i++){
            currentSubset.push(nums[i])
            bt(i+1,currentSubset,nums)
            currentSubset.pop()
        }
        
    }
    bt(0, [], nums)
    return subset
};