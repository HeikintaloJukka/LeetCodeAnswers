/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let zeroRows = new Set()
    let zeroCols = new Set()

    //look for 0 save id for later
    for(let col=0;col<matrix.length;col++){
        for(let row=0;row<matrix[0].length;row++){
            if(matrix[col][row] === 0){
                zeroCols.add(col)
                zeroRows.add(row)
            }
        }
    }

    //set 0 for rows and cols by id
    for (let colId of zeroCols) {
        if(typeof colId !== 'number') return
        for(let i=0;i<matrix[0].length;i++){
            matrix[colId][i] = 0
        }
        
    }
    for (let rowId of zeroRows) {
        if(typeof rowId !== 'number') return
        for(let i=0;i<matrix.length;i++){
            matrix[i][rowId] = 0
        }
        
    }
};