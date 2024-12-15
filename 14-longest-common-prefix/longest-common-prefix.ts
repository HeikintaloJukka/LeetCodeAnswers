function longestCommonPrefix(strs: string[]): string {
    if(strs.length < 2){
        if(strs.length == 1){
            return strs[0]
        }
        return ""
    }

    let prefix = ""
    for(let j=0;j<strs[0].length;j++){
        let letter = strs[0].substring(j,j+1)
        let pass = true
        //add letters until mismatch
        for(let i=1;i<strs.length;i++){
            if(letter !== strs[i].substring(j,j+1)){
                pass = false;
                break
            }
        }
        if(pass){
            prefix += letter
        } else break
    }

    return prefix
};