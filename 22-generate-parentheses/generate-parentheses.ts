function generateParenthesis(n: number): string[] {
    let ans = []

    let backtrack = (curString, left, right) => {
        if(curString.length % (2*n) === 0 && curString.length > 0){
            ans.push(curString)
        }

        if(left < n){
            let newString = curString + "("
            backtrack(newString, left +1, right)
        }
        
        if(left > right){
            let newString = curString + ")"
            backtrack(newString, left, right +1)
        }
    }
    
    backtrack([],0,0)

    return ans
};