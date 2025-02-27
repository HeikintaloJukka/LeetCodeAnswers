function countPrefixSuffixPairs(words: string[]): number {

    let isPrefixAndSuffix = (str1:string,str2:string):boolean => {
        if (str1 > str2) return false
        if(str2.startsWith(str1) && str2.endsWith(str1)){
            return true
        }
        return false
    }
    
    let count = 0
    for(let i=0;i<words.length-1;i++){
        for(let j=i+1;j<words.length;j++){
            if(isPrefixAndSuffix(words[i],words[j])){
                count++
            }
        }
    }
    return count
};