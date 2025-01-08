function countPrefixSuffixPairs(words: string[]): number {

    let isPrefixAndSuffix = (str1:string,str2:string):boolean => {
        if (str1 > str2) return false

        let prefix = str2.slice(0,str1.length)
        let suffix = str2.slice(str2.length-str1.length)
        if(prefix === str1 && suffix === str1){
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