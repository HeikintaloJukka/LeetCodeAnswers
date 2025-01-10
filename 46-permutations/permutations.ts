function permute(nums: number[]): number[][] {
    let ans = []
    let backtrack = (curr) => {
        if(nums.length === curr.length){
            ans.push(curr.slice())
        }

        for(let num of nums){
            if(!curr.includes(num)){
                curr.push(num)
                backtrack(curr)
                curr.pop()
            }
        }
    }
    backtrack([])

    return ans
};