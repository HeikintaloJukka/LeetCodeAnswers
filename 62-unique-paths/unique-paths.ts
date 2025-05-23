function uniquePaths(m: number, n: number): number {
    let paths = new Array(m).fill(0).map((x) => {return new Array(n).fill(1)})
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            paths[i][j] = paths[i-1][j]+paths[i][j-1]
        }
    }
    return paths[m-1][n-1]
};