function applyOperations(nums: number[]): number[] {
    let zeroCount = 0
    let newArr = []
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] === nums[i+1]){
            nums[i] = nums[i]*2
            nums[i+1] = 0
        }

        if(nums[i] !== 0){
            newArr.push(nums[i])

        }
        else zeroCount++
    }

    if(nums[nums.length-1] !== 0){
        newArr.push(nums[nums.length-1])
    }
    else zeroCount++

    while(zeroCount > 0){
        zeroCount--
        newArr.push(0)
    }

    return newArr
};