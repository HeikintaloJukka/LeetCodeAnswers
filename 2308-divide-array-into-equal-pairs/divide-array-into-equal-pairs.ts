function divideArray(nums: number[]): boolean {
    let map = new Map()
    for(let num of nums){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }
        else map.set(num, 1)
    }

    for(let val of map){
        if(!(val[1] % 2 === 0)){
            return false
        }
    }
    return true
};