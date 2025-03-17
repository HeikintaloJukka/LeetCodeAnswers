function divideArray(nums: number[]): boolean {
    let map = new Map()
    for(let num of nums){
        if(map.has(num)){
            map.delete(num)
        }
        else map.set(num, 1)
    }

    return map.size === 0
};