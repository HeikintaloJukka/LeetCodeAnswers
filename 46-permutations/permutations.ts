function permute(nums: number[]): number[][] {
    let ans = []
    let backtrack = (curr) => {
        console.log("--------------")
        console.log(curr)
        

        if(nums.length === curr.length){
            console.log("PUSHING")
            console.log(ans)
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