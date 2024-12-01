function smallestNumber(n: number): number {
    if(n<2){
        return Number.parseInt("1", 2)
    }

    let x:string = n.toString(2)
    let temp:string = ""
    for(let i=0;i<x.length;i++){
        temp += "1"
    }

    return Number.parseInt(temp, 2)
};