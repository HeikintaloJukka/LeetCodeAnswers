function merge(intervals: number[][]): number[][] {
    if(intervals.length < 2){
        return intervals
    }

    intervals.sort((a,b) => {return a[0] - b[0]})

    let merged = []
    while(intervals.length > 1){

        if(intervals[0][1] >= intervals[1][0]){
            intervals[0] = [Math.min(intervals[0][0],intervals[1][0]),Math.max(intervals[0][1],intervals[1][1])]
            intervals.splice(1,1)
        }
        else{
            merged.push(intervals.shift())
        }

        if(intervals.length < 2){
            while(intervals.length > 0){
                merged.push(intervals.shift())
            }
        }
    }

    return merged
};