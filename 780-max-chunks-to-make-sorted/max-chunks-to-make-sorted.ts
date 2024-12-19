function maxChunksToSorted(arr: number[]): number {
    let n = arr.length
    let chunks = 0
    let maxElement = 0
    for(let i=0;i<arr.length;i++){
        maxElement = Math.max(maxElement,arr[i])
        if(maxElement === i){
            chunks++
        }
    }
    return chunks
};