function titleToNumber(columnTitle: string): number {
    columnTitle = columnTitle.toUpperCase()
    let result = 0
    let n = columnTitle.length
    for(let i=0;i<n;i++){
        result = result * 26 //every new letter multiply by base26
        result += columnTitle.charCodeAt(i) - 64
    }
    return result
};