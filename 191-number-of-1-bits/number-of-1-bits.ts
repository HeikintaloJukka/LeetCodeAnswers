function hammingWeight(n: number): number {
    let bin = (n).toString(2)
    let total = 0
    for(let c of bin){
        if(c == '1'){
            total++
        }
    }

    return total
};