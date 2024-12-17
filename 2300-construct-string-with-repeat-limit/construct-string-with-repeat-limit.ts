function repeatLimitedString(s: string, repeatLimit: number): string {
    let ans = "";
    let chars='abcdefghijklmnopqrstuvwxyz';

    let freq: number[] = new Array(26).fill(0);
    s.split("").forEach(x => {
        let index = parseInt(x, 36) - 10
        freq[index]++
    })

    let letterOverflowIndex = -1
    for(let i=25;i>=0;i--){
        if(freq[i] == 0) continue

        if(letterOverflowIndex > 0){
            ans+=chars[i];
            freq[i]--
            i = letterOverflowIndex
            letterOverflowIndex = -1
        }
        else {
            for(let j=0;j< repeatLimit && freq[i] > 0;j++, freq[i]--){
                ans+=chars[i];
            }

            if(freq[i] > 0){
                letterOverflowIndex = i+1
            }
        }
        
    }

    return ans
};