/*function permuteUnique(nums: number[]): number[][] {
    const results: number[][] = [];
    const visited: boolean[] = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);

    const backtrack = (path: number[]) => {
        if (path.length === nums.length) {
            results.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

            visited[i] = true;
            path.push(nums[i]);

            backtrack(path);

            path.pop();
            visited[i] = false;
        }
    };

    backtrack([]);
    return results;

};*/

function permuteUnique(nums: number[]): number[][] {
    let combs = []
    let visited = new Array(nums.length).fill(false)
    nums.sort((a,b) => a-b)
    
    let backtrack = (path) => {
        if(path.length === nums.length){
            combs.push([...path])
            return
        }

        for(let i=0;i<nums.length;i++){
            if(visited[i]) continue
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
            visited[i] = true
            path.push(nums[i])
            backtrack(path)
            path.pop()
            visited[i] = false;
        }
    }
    backtrack([])

    return combs
};