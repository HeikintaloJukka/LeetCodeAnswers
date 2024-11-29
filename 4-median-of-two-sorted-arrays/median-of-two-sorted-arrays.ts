function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let ans: number[] = [];
    ans.push(...nums1)
    ans.push(...nums2)
    ans.sort(function(a,b){return a-b})

    let mid = ans.length/2;

    if(mid % 1 ===0){
        //whole num
        return (ans[mid-1]+ans[mid])/2
    }
    else return ans[Math.floor(mid)]
};