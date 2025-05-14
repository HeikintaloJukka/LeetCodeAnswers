function getRow(rowIndex: number): number[] {
    let arr2D = new Array(rowIndex+1).fill(0).map((thing) => {
        return new Array(rowIndex+1).fill(0)
    })

    arr2D[0][0] = 1
    for(let i=1;i<rowIndex+1;i++){
        arr2D[i][0] = 1
        arr2D[i][i] = 1
        for(let j=1;j<i;j++){
            arr2D[i][j] = arr2D[i-1][j-1] + arr2D[i-1][j]
        }
    }

    return arr2D[rowIndex]
};