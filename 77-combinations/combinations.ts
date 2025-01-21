function combine(n: number, k: number): number[][] {
    let res = []
    let backtrack = (path,firstNum) => {
        if(path.length === k){
            res.push([...path])
            return
        }

        for(let i=firstNum;i<=n;i++){
            if(path[path.length-1] === i) continue
            path.push(i)
            backtrack(path,i+1)
            path.pop()
        }
    }
    backtrack([],1)
    return res
};