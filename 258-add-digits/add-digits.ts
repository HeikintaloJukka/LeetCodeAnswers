function addDigits(num: number): number {
    let total = 0
    let numArr = num.toString().split("")
    for(let i=0;i<numArr.length;i++){
        total += parseInt(numArr[i])
    }
    if(total.toString().split("").length < 2) return total
    return addDigits(total)
};