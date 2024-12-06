function convert(s: string, numRows: number): string {
    if(s.length < 3 || numRows < 2){
        return s
    }

    //init matrix
    //rowLength = sections * sectionMaxLength
    let rowLength = Math.ceil(s.length/(2*numRows-2))*numRows-1;
    let rows: string[][] = Array.from({length:numRows})
    rows.forEach((val,ind)=>{
        rows[ind] = Array.from({length:rowLength},()=>{return ""})
    })

    //zigzag string into matrix
    let currRow = 0;
    let currCol = 0;
    let currLetter = 0;
    while(currLetter < s.length){

        //move down
        while(currRow < rows.length && currLetter < s.length){
            rows[currRow][currCol] = s[currLetter]
            currRow++;
            currLetter++;
        }

        //move to starting point for diagonal
        currRow-=2
        currCol++

        //move diagonal
        while(currRow > 0 && currCol < rowLength && currLetter < s.length){
            rows[currRow][currCol] = s[currLetter]
            currRow--
            currCol++
            currLetter++;
        }
    }

    
    for(let i=0;i<numRows;i++){
        console.log(rows[i])
    }

    //read matrix without init fill
    let ans:string = "";
    rows.forEach((row,ind)=>{
        row.forEach((val,ind)=>{
            if(val !== ""){
                ans+=val
            }
        })
    })

    return ans
};