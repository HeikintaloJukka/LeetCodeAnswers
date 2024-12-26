function letterCombinations(digits: string): string[] {
    if(digits.length < 1){
        return []
    }
    let comb = []
    let list = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    let backtrack = (index:number, path: string[]): void => {
        if(path.length === digits.length){
            console.log(comb)
            console.log(path)
            comb.push(path.join(""))
            return
        }
        let possibleLetters: string = list[digits[index]];
        for(let letter of possibleLetters){
            path.push(letter)
            backtrack(index+1,path)
            path.pop()
        }
    }
    backtrack(0,[])
    return comb
};