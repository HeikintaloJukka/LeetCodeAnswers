function plusOne(digits: number[]): number[] {
    console.log(digits)
    for(let i=digits.length-1;i>=0;i--){
        let num = digits[i] +1
        if(num % 10 === 0){
            digits[i] = 0
        }
        else{
            digits[i] = num
            return digits
        }

        //out of nums to handle +1 remaining
        if(i===0){
            digits.unshift(1)
        }
    }
    return digits
};