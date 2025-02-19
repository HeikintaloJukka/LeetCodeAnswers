function getHappyString(n: number, k: number): string {

    let hStrings = []

    let genHString = (path) => {
        if(path.length === n){
            hStrings.push(path.join(""))
            return
        }

        for(let char = 97;char <= 99;char++){
            
            if(path.length> 0 && String.fromCharCode(char) === path[path.length-1]){
                continue
            }

            path.push(String.fromCharCode(char))
            genHString(path)
            path.pop()
        }
    }

    genHString([])
    hStrings.sort()
    return hStrings[k-1] ? hStrings[k-1] : ""
};