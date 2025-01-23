function countServers(grid: number[][]): number {
    let compRowCount = new Array(grid.length).fill(0)
    let compColCount = new Array(grid[0].length).fill(0)

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if (grid[i][j]) {
                compRowCount[i]++;
                compColCount[j]++;
            }
        }
    }

    let communicable = 0;

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if (grid[i][j]) {
                if(compRowCount[i] > 1){
                    communicable++
                }else if(compColCount[j] > 1){
                    communicable++
                }
            }
        }
    }

    return communicable
};