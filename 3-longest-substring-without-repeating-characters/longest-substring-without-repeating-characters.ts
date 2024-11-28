function lengthOfLongestSubstring(s: string): number {
    /*** Works but time limit exceeded on last
    
    let checking = []
    let substrings = []
    let seen = []

    //each possible start
    for(let j=0;j<s.length;j++){
        //parses substrings starting from s[i]
        for(let i=j;i<s.length;i++){
            checking.push(s[i])

            if(checking.includes(s[i+1])){
                substrings.push(checking)
                checking = []
            }     
            else if(i === s.length-1){
                substrings.push(checking)
            }
        }
        checking = []
    }

    //none found
    if(substrings.length == 0){
        return 0
    }

    //get longest
    let longest = substrings.reduce(function(a,b){
        return a.length > b.length ? a : b
    })
    console.log(substrings)
    console.log(longest)
    return longest.length
    
    ***/
    
    let map = new Map();
    let start =0;
    let longest =0;
    let longestS ="";

    for(let i=0;i<s.length;i++){
        let char = s[i]

        if(map.has(char)){
            if(map.get(char) >= start){
                start = map.get(char) +1;
            }
        }
        map.set(char,i)

        if(longest < (i - start+1)){
            longestS = s.substring(start,i+1)
            longest = longestS.length
        }
    }
    console.log(map)
    console.log(longestS)    

    return longest
};