function singleNumber(nums: number[]): number {
    let hash_table = {}
    for(let num of nums){
        if(!hash_table[num]){
            hash_table[num] = 0
        }
        hash_table[num]++
    }
    for(let num of nums){
        if(hash_table[num] == 1){
            return num
        }
    }
    return 0
};