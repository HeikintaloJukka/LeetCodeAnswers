function canPermutePalindrome(s: string): boolean {
    let freq = new Map()
    for(let i=0;i<s.length;i++){
        if(!freq.has(s[i])){
            freq.set(s[i],1)
        }
        else freq.set(s[i],freq.get(s[i])+1)
    }

    let odds = 0
    for(let letter of freq.keys()){
        let letFreq = freq.get(letter)
        if(letFreq % 2 === 1){
            odds++
        }

        if(odds > 1) return false
    }

    return true
};