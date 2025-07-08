function isAnagram(s: string, t: string): boolean {
    if(s.split("").sort().toString() === t.split("").sort().toString()){
        return true
    }
    return false
};