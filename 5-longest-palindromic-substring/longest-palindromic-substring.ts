function longestPalindrome(s: string): string {
    if(s.length < 2){
        return s
    }

    let palindromes: string[] = [];
    let longest: number = 1;
    let longestS: string = s.substring(0,1);
    for(let i=0;i<s.length;i++){
        for(let j=i+longest;j<=s.length;j++){
            let spal = s.substring(i,j)
            if(isPalindrome(spal)){
                //console.log(spal+" is pal")
                palindromes.push(spal)
                if(spal.length > longest){
                    longest = spal.length;
                    longestS = spal;
                }
            }
        }
    }

    //console.log(palindromes)

    return longestS
};

function isPalindrome(s: string): boolean {
    if(s.length < 1){
        return false
    }

    let left: number = 0;
    let right: number = s.length-1;

    while(left < right){
        if(s[left] != s[right]){
            return false
        }
        left++
        right--
    }

    return true
}