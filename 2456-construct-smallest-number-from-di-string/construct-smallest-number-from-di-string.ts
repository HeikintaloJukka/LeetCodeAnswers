function smallestNumber(pattern: string): string {
    let result = ""
    let stack = []

    for(let i=0;i<pattern.length+1;i++){
        stack.push(i+1)

        if(pattern.length === i || pattern[i] === "I"){
            while(stack.length > 0){
                result += stack.pop()
            }
        }
    }

    return result
};