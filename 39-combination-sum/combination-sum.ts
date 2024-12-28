function combinationSum(candidates: number[], target: number): number[][] {
    let ans = []

    let backtrack = (remain, start,curCombArr) => {
        if (remain < 0) {
            return
        }

        if(remain === 0){
            ans.push([...curCombArr.slice("")])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            curCombArr.push(candidates[i]);
            backtrack(remain - candidates[i], i, curCombArr);
            curCombArr.pop();
        }
    }
    backtrack(target,0,[])
    return ans
};