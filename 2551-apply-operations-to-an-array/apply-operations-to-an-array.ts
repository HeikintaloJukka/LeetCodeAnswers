function applyOperations(nums: number[]): number[] {
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] === nums[i+1]){
            nums[i] = nums[i]*2
            nums[i+1] = 0
        }
    }

    let zeroCount = 0
    let newArr = []
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 0){
            zeroCount++
        }
        else newArr.push(nums[i])

        if(i === nums.length-1){
            while(zeroCount > 0){
                zeroCount--
                newArr.push(0)
            }
        }
    }

    return newArr
};