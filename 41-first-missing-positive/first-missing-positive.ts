function firstMissingPositive(nums: number[]): number {
    nums.sort((a,b) => {return a-b})


    let negMod = 0
    for(let i=0;i<nums.length+1;i++){
        if(nums[i] < 1 || nums[i] === nums[i-1]){
            negMod--
        }
        else if(nums[i] > 1+i+negMod){
            return 1+i+negMod
        }
        else if(!nums[i]){
            return 1+i+negMod
        }
    }
};