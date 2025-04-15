/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1)
        }
        else map.set(nums[i], 1)
    }

    let num=0
    let i =0
    while(map.size > 0){
        if(map.has(num)){
            nums[i] = num
            i++

            let current = map.get(num)-1
            map.set(num, current)
            if(current < 1){
                map.delete(num)
            }
        } else num++
    }
};