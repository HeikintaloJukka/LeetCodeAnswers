function combinationSum(candidates: number[], target: number): number[][] {
    let ans = []
    let backtrack = (combined, curCombArr) => {

        if(combined % target === 0 && combined > 0){
            let temp = curCombArr.slice("").sort()

            //only unique num combs
            for(let prev of ans){
                if(ans.length > 0 && temp.toString() === prev.toString() ){ 
                    return
                }
            }

            ans.push(temp)
            return
        }

        for(let cand of candidates){
            if(combined + cand <= target){
                curCombArr.push(cand)
                backtrack(combined + cand,curCombArr)
                curCombArr.pop()
            }
        }
    }
    backtrack(0,[])
    return ans
};