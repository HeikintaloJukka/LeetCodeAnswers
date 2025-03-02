function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {

    let length = Math.max(nums1.length,nums2.length)
    let ids = new Map()

    for(let i=0;i<nums1.length;i++){
        ids.set(nums1[i][0], i)
    }

    let toAdd = []
    for(let i=0;i<nums2.length;i++){
        if(ids.has(nums2[i][0])){
            nums1[ids.get(nums2[i][0])][1] += nums2[i][1]
        }
        else toAdd.push(i)
    }

    for(let id of toAdd){
        nums1.push(nums2[id])
    }
    nums1.sort((a,b) => {
        return a[0] - b[0]
    })

    return nums1
};