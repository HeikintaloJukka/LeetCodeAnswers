function spiralOrder(matrix: number[][]): number[] {
    let row = matrix.length
    let col = matrix[0].length
    let direction = 1
    let output = []
    let i = 0
    let j = -1

    while(row*col > 0){
        for(let k=0;k<col;k++){
            j+=direction
            output.push(matrix[i][j])
        }
        row -= 1
        for(let l=0;l<row;l++){
            i+=direction
            output.push(matrix[i][j])
        }
        col -= 1
        direction *= -1
    }
    return output
};