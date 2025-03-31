function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '')
    s = s.toLowerCase()

    for(let i=0;i<s.length;i++){
        if(s[i] !== s[s.length-1-i]){
            return false
        }
    }
    return true
};