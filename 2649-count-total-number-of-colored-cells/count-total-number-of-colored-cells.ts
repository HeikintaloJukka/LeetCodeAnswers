function coloredCells(n: number): number {
    let total = 0
    let add = 0
    for(let i=1;i<n;i++){
        add += 4
        total += add
    }

    return total +1
};