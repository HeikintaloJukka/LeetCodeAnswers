function isValid(s: string): boolean {
    let stack = []
    let openings = ["(","[","{"]
    let list = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for (let bracket of s) {
        if (list[stack[stack.length-1]] === bracket) {
            let top = null
            if(stack.length > 0){
                top = stack.pop()
            }

            if (list[top] !== bracket) {
                return false;
            }
        } else {
            stack.push(bracket);
        }
    }
    return stack.length === 0;
};