function checkPowersOfThree(n: number): boolean {
    while (n > 1){
        if((n%3===0) || ((n-1)%3===0)){
            n = Math.floor(n / 3)
        }
        else return false
    }
    return true
};