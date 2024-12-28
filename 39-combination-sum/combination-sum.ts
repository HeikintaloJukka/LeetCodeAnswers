function combinationSum(candidates: number[], target: number): number[][] {
    let ans = []
    /*
        const bt = (sum: number, idx: number, trace: number[]) => {
        if (idx >= candidates.length || sum > target) {
            return;
        }

        if (sum === target) {
            result.push([...trace])
            return;
        }

        trace.push(candidates[idx]);
        bt(sum + candidates[idx], idx, trace);
        trace.pop();
        bt(sum, idx + 1, trace);

    }

    */
    let backtrack = (combined, idx,curCombArr) => {
        if (idx >= candidates.length || combined > target) {
            return
        }

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

        curCombArr.push(candidates[idx])
        backtrack(combined + candidates[idx],idx,curCombArr)
        curCombArr.pop()
        backtrack(combined,idx+1,curCombArr)
    }
    backtrack(0,0,[])
    return ans
};