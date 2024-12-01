function smallestNumber(n: number): number {
    if(n<2){
        return Number.parseInt("1", 2)
    }

    let x:string = n.toString(2)
    let temp:string = ""
    for(let i=0;i<x.length;i++){
        temp += "1"
    }

    let test1:number = Number.parseInt(x, 2)-Number.parseInt(temp, 2)
    let test2:number = Number.parseInt(x, 2)-Number.parseInt(temp.substring(0,temp.length-1), 2)

    if(test1 < test2){
        return Number.parseInt(temp, 2)
    }else{
        return Number.parseInt(temp.substring(0,temp.length-1), 2)
    }
    return 0
};