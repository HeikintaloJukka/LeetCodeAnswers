function countAndSay(n: number): string {
    if(n === 1){
        return "1"
    }

    let ns = ""+1
    let newString = ""

    for(let j=0;j<n-1;j++){
        for(let i=0;i<ns.length;i++){
            let curr = ns[i]
            let count = 1
            while(curr === ns[i+count]){
                count++
            }
            newString = newString + "" + count + ns[i]
            i = i+count-1
        }

        if(j === n-2){
            return newString
        }

        ns = newString
        newString = ""
    }

    return "never here"
};