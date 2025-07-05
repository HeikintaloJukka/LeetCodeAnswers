function findLucky(arr: number[]): number {
    let freq = new Map()
    for(let i=0;i<arr.length;i++){
        if(freq.has(arr[i])){
            freq.set(arr[i],freq.get(arr[i])+1)
        }else freq.set(arr[i],1)
    }

    for(let obj of freq){
        if(obj[0] !== obj[1]){
            freq.delete(obj[0])
        }
    }

    if(freq.size > 0){
        let arrAsc = [...freq.entries()].sort((a,b) => a[0] - b[0])
        return arrAsc[arrAsc.length-1][1]
    }
    return -1
};