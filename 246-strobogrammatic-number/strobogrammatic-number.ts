function isStrobogrammatic(num: string): boolean {
    let rotateable = new Map()
    rotateable.set("0",0)
    rotateable.set("1",1)
    rotateable.set("6",9)
    rotateable.set("8",8)
    rotateable.set("9",6)

    let rotatedNum = new Array(num.length)
    for(let i=0;i<num.length;i++){
        if(rotateable.has(num[i])){
            rotatedNum[num.length-1-i] = rotateable.get(num[i])
        }
    }

    if(rotatedNum.join("") === num) return true
    return false
};