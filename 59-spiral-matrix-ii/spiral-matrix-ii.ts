function generateMatrix(n: number): number[][] {
    if(n < 2){
        return [[n]]
    }
    //right matrix[0...n-1][0] down matrix[n-1][1...n-1]
    //left matrix[n-1...0][n-1] up matrix[0][n-1...1]

    let matrix:number[][] = Array.from({length:n}, ()=>new Array(n).fill(0))

    let num = 1;
    let right = 0
    let left = 0
    while(num<=n*n){
        for(let i=right;i<n-left;i++){
            //console.log("RIGHT "+num)
            matrix[right][i] = num
            num++
            if(num >= n*n){
                break
            }
        }
        for(let i=1+right;i<n-left;i++){
            //console.log("DOWN "+num)
            matrix[i][n-1-right] = num
            num++
            if(num >= n*n){
                break
            } 
        }
        right++

        for(let i=n-1-right;i>=left;i--){
            //console.log("LEFT "+num)
            matrix[n-1-left][i] = num
            num++
            if(num >= n*n){
                break
            } 
        }
        for(let i=n-1-right;i>=left+1;i--){
            //console.log("UP "+num)
            matrix[i][left] = num
            num++
            if(num >= n*n){
                break
            } 
        }
        left++
    }
    return matrix
};