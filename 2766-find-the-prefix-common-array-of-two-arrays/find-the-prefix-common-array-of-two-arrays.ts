function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    let map = new Map()
    let ans = []
    let matches = 0
    for(let i=0;i<A.length;i++){
        if(!map.get(A[i])) map.set(A[i],0)
        if(!map.get(B[i])) map.set(B[i],0)

        map.set(A[i],map.get(A[i])+1)
        if(map.get(A[i]) === 2) matches++


        map.set(B[i],map.get(B[i])+1)
        if(map.get(B[i]) === 2) matches++

        ans[i] = matches
    }
    return ans
};