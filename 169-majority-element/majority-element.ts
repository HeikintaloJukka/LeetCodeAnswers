function majorityElement(nums: number[]): number {
    let majority = new Map()
    for(let i=0;i<nums.length;i++){
        if(!majority.has(nums[i])){
            majority.set(nums[i],1)
        }
        else{
            majority.set(nums[i], majority.get(nums[i]) +1)
        }
    }

    let most = [...majority.entries()].reduce((a,b) => {
            return a[1] > b[1] ? a : b
        })

    return most[1] > nums.length/2 ? most[0] : -1
};