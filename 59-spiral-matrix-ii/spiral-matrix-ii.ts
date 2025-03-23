function generateMatrix(n: number): number[][] {
    if(n < 2){
        return [[n]]
    }
    //right matrix[0...n-1][0] down matrix[n-1][1...n-1]
    //left matrix[n-1...0][n-1] up matrix[0][n-1...1]

    let matrix:number[][] = Array.from({length:n}, ()=>new Array(n).fill(0))

    let row = n
    let col = n
    let direction = 1
    let output = []
    let i = 0
    let j = -1
    let num = 1

    while(row*col > 0){
        for(let k=0;k<col;k++){
            j+=direction
            matrix[i][j] = num
            num++
        }
        row -= 1
        for(let l=0;l<row;l++){
            i+=direction
            matrix[i][j] = num
            num++
        }
        col -= 1
        direction *= -1
    }
    return matrix
};