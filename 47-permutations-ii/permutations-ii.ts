function permuteUnique(nums: number[]): number[][] {
    let res = []
    let counter: { [key: number]: number } = {};
    for (let num of nums) {
        if (!(num in counter)) counter[num] = 0;
        counter[num]++;
    }

    let backtrack = (path,n) => {
        if(path.length === n){
            res.push([...path])
            return
        }

        for(let num in counter){
            if(counter[num] == 0) continue
            path.push(parseInt(num))
            counter[num]--
            backtrack(path, n)
            path.pop()
            counter[num]++
        }

    }
    backtrack([],nums.length)

    return res
};