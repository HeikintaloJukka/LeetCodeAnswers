function lengthOfLastWord(s: string): number {
    let temp = s.trim().split(" ")
    return temp[temp.length -1].length
};