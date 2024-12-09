function romanToInt(s: string): number {
    let num = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === "I"){
            if(s[i+1] !== undefined && (s[i+1] === "V" || s[i+1] === "X")){
                if(s[i+1] === "V"){
                    num +=4
                }else{
                    num +=9
                }
                i++
            }
            else{
                num += 1
            }
        }
        else if(s[i] === "V"){
            num += 5
        }
        else if(s[i] === "X"){
            if(s[i+1] !== undefined && (s[i+1] === "L" || s[i+1] === "C")){
                if(s[i+1] === "L"){
                    num +=40
                }else{
                    num +=90
                }
                i++
            }
            else{
                num += 10
            }
        }
        else if(s[i] === "L"){
            num += 50
        }
        else if(s[i] === "C"){
            if(s[i+1] !== undefined && (s[i+1] === "D" || s[i+1] === "M")){
                if(s[i+1] === "D"){
                    num +=400
                }else{
                    num +=900
                }
                i++
            }
            else{
                num += 100
            }
        }
        else if(s[i] === "D"){
            num += 500
        }
        else if(s[i] === "M"){
            num += 1000
        }
    }
    return num
};