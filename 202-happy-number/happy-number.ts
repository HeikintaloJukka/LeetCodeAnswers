function isHappy(n: number): boolean {

    let loop = 0
    while(n !== 1){
        let chars = n.toString().split("")
        let num = 0
        for(let char of chars){
            num += Math.pow(parseInt(char),2)
        }

        n = num
        loop++

        if(loop > 20){
            return false
        }
    }
    return true;
};