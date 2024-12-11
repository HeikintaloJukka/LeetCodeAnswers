function reverse(x: number): number {
    let old: string = ""+x
    let newS: string = ""

    if(x<0){
        old = old.substring(1)
        newS += "-"
    }

    for(let i=0;i<old.length;i++){
        newS += old[old.length-i-1]
    }

    x = parseInt(newS)

    if(x > 2147483647 || x < -2147483647){
        return 0
    }

    return parseInt(newS)
};