function maximumCandies(candies: number[], k: number): number {
    candies.sort((a,b) => b-a)
    let max = candies[0]

    let canAllocateCandies = (candies, k, numOfCandies) => {
        let maxNumOfChildren = 0
        for(let i=0;i<candies.length;i++){
            maxNumOfChildren += Math.floor(candies[i] / numOfCandies)
        }

        return maxNumOfChildren >= k
    }

    let left = 0
    let right = max
    while(left < right){
        let middle = Math.floor((left+right+1)/2)
        console.log(middle)
        if(canAllocateCandies(candies, k, middle)){
            left = middle
        }
        else{
            right = middle -1
        }
    }

    return left
};