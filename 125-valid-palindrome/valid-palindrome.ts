function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '')
    s = s.toLowerCase()

    let i=0
    let j=s.length-1
    while(i<j){
        if(s[i] !== s[j]){
            return false
        }
        i++
        j--
    }
    return true
};