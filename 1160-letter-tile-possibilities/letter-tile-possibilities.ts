function numTilePossibilities(tiles: string): number {
    let combinations = new Set()
    let seen = new Array(tiles.length).fill(false)

    let backtrack = (path) => {
        for(let i=0;i<tiles.length;i++){

            if(seen[i]){
                continue
            }
            seen[i] = true

            path.push(tiles[i])
            combinations.add(path.join(""))
            backtrack(path)
            path.pop()

            seen[i] = false
        }

    }
    backtrack([])

    return combinations.size
};