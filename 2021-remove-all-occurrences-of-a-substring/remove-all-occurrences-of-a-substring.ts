function removeOccurrences(s: string, part: string): string {
    let prevLength = s.length;
    s = s.replace(part,"")
    
    if(prevLength > s.length){
        return removeOccurrences(s,part)
    }

    return s
};