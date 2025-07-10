function shortestDistance(wordsDict: string[], word1: string, word2: string): number {
    let word1Ind = []
    let word2Ind = []
    for(let i=0;i<wordsDict.length;i++){
        if(wordsDict[i] == word1){
            word1Ind.push(i)
        }
        if(wordsDict[i] == word2){
            word2Ind.push(i)
        }
    }

    //word1Ind.sort()
    //word2Ind.sort()

    let shortest = 9999
    for(let i=0;i<word1Ind.length;i++){
        for(let j=0;j<word2Ind.length;j++){
            let val = Math.abs(word1Ind[i] - word2Ind[j])
            if( val < shortest){
                shortest = val
            }
        }
    }

    return shortest
};