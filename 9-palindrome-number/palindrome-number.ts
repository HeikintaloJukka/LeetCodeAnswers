function isPalindrome(x: number): boolean {
    if(x<0){
        return false
    }

    let check:string = ""+x

    for(let i=0;i<Math.floor(check.length/2);i++){
        if(check[i] !== check[check.length-1-i]){
            return false
        }
    }

    return true
};