function removeSubfolders(folder: string[]): string[] {
    folder = folder.sort()
    
    let result = []
    result.push(folder[0])

    for(let i=1;i<folder.length;i++){
        let lastFolder = result[result.length-1]
        lastFolder += '/'
        if(folder[i].substring(0,lastFolder.length) !== lastFolder){
            result.push(folder[i])
        }
    }

    return result
};