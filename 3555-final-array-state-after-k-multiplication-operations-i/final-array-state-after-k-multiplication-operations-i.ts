function getFinalState(nums: number[], k: number, multiplier: number): number[] {


    for(let j=0;j<k;j++){
        let minInd=0;
        let min=nums[0]

        for(let i=0;i<nums.length;i++){
            if(nums[i] < min){
                min = nums[i]
                minInd = i
            }
        }

        nums[minInd] = nums[minInd] * multiplier
    }

    return nums
};