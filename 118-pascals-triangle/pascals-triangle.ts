function generate(numRows: number): number[][] {

    let res = []
    res.push([1])
    for(let i=1;i<numRows;i++){
        let row = []
        let prevRow = res[i-1]
        row.push(1)

        for(let j=1;j<i;j++){
            row.push(prevRow[j]+prevRow[j-1])
        }

        row.push(1)
        res.push(row)
    }
    return res
};