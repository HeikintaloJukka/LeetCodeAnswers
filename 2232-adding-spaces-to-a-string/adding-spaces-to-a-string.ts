function addSpaces(s: string, spaces: number[]): string {
    let ns = s.substring(0,spaces[0])
    for(let i=0;i<spaces.length;i++){
        ns += " "
        ns += s.substring(spaces[i],spaces[i+1])
    }
    
    return ns
};