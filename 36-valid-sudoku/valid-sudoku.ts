function isValidSudoku(board: string[][]): boolean {
    let boxes = new Array(9).fill("").map(u => { return []; });

    for(let k=0;k<board.length;k++){
        let checkedRow = []
        let checkedCol = []
        for(let i=0;i<board.length;i++){
            if(board[k][i] !== "." && checkedRow.includes(board[k][i])){
                return false
            }
            checkedRow.push(board[k][i])

            if(board[i][k] !== "." && checkedCol.includes(board[i][k])){
                return false
            }
            checkedCol.push(board[i][k])

            // Check the box
            let idx = Math.floor(k / 3) * 3 + Math.floor(i / 3);
            if (board[k][i] !== "." && boxes[idx].includes(board[k][i])) {
                return false;
            }
            boxes[idx].push(board[k][i]);
        }
    }
    

    return true
};