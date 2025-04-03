function maximumTripletValue(nums: number[]): number {
    let leftMax = new Array(nums.length).fill(0)
    let rightMax = new Array(nums.length).fill(0)
    for(let i=1;i<nums.length;i++){
        leftMax[i] = Math.max(leftMax[i-1], nums[i-1])
        rightMax[nums.length-1-i] = Math.max(rightMax[nums.length-i],nums[nums.length-i])
    }

    let res = 0
    for(let i=1;i<nums.length-1;i++){
        res = Math.max(res,(leftMax[i]-nums[i])*rightMax[i])
    }
    return res
};