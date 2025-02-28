function groupAnagrams(strs: string[]): string[][] {
    let map = new Map()
    for(let str of strs){
        let chars: string[] = Array.from(str)
        chars.sort()
        let key: string = chars.join("")
        
        if(!map.has(key)){
            map.set(key, [])
        }

        map.get(key).push(str)
    }
    let key = Array.from(strs)

    return Array.from(map.values())
};