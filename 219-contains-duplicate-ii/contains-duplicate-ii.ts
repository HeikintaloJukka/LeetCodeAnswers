function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            return true
        }
        map.set(nums[i],1)
        if(map.size > k){
            map.delete(nums[i-k])
        }
        
    }
    return false
};