function minimumRecolors(blocks: string, k: number): number {
    let substrings = []
    let blackCounts = []
    let largest = 0;
    for(let i=0;i<=blocks.length-k;i++){
        substrings.push([])
        blackCounts.push(0)
        for(let j=0;j<k;j++){
            substrings[i].push(blocks[j+i])
            if(blocks[j+i] === "B"){
                blackCounts[i]++
            }
            if(largest < blackCounts[i]){
                largest = blackCounts[i]
            }
        }
    }

    return k-largest
};