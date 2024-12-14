function intToRoman(num: number): string {
    let roman = ""
    let chart = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }
    
    for(let i=0;i<Object.keys(chart).length;i++){
        let biggest = Object.keys(chart)[Object.keys(chart).length-i-1]

        if(num >= chart[biggest]){
            num -= chart[biggest]
            roman += biggest
            i--
        }
    }
    
    return roman
};