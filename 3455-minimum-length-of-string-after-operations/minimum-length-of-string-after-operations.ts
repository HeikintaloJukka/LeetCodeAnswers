function minimumLength(s: string): number {
    const freqMap = new Map()
    for(let char of s){
        if(!freqMap.get(char)){
            freqMap.set(char,0)
        }
        freqMap.set(char,freqMap.get(char)+1)
    }

    let deleteC = 0
    for(let pair of freqMap){
        if(pair[1] %2 ==1){
            deleteC += pair[1] -1
        }
        else{
            deleteC += pair[1] -2
        }
    }

    return s.length - deleteC
};