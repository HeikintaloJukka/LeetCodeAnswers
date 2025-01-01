function removeElement(nums: number[], val: number): number {
    let count=0
    for(let i=0,k=0;i<nums.length;i++,k++){
        if(nums[i]===val){
            count++
            let length = nums.length
            for(let j=1;j<length;j++){
                if(nums[k+j] !== undefined && nums[k+j] !== val){
                    nums[i]=nums[k+j]
                    nums[k+j]=undefined
                    k++
                    break
                }
            }
        }else if(nums[i] === undefined){
            let length = nums.length
            for(let j=1;j<length;j++){
                if(nums[i+j] !== undefined && nums[i+j] !== val){
                    console.log("wot")
                    nums[i]=nums[i+j]
                    nums[i+j]=undefined
                    break
                }
            }
        }
    }
    return nums.length - count
};