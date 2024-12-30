function removeDuplicates(nums: number[]): number {
    let previous = null
    let uniqueArr:number[] = []
    for(let num of nums){
        if(previous !== num){
            uniqueArr.push(num)
        }
        previous = num
    }

    for(let i=0;i<uniqueArr.length;i++){
        nums[i] = uniqueArr[i]
    }
    
    return uniqueArr.length
};