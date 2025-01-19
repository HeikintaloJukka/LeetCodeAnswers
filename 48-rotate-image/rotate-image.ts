/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let n = matrix.length
    console.log(matrix)
    console.log(n)

    //transpose
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){

            [matrix[i][j],matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    //reflext
    for(let i=0;i<n;i++){
        for(let j=0;j<n/2;j++){
            [matrix[i][n-1-j],matrix[i][j]] = [matrix[i][j],matrix[i][n-1-j]]
        }
    }
    console.log(matrix)
};