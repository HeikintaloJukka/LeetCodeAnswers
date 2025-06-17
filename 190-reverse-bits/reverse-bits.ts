function reverseBits(n: number): number {
    //change number to binary representation in array form and fill with zero until 32bit
    let bin = (n >>> 0).toString(2);
    let arr = bin.toString().split("")
    while(arr.length <= 32){
        arr.unshift("0")
    }

    //reverse with helper array
    let copy = []
	for(let i=arr.length-1;i>0;i--){
        copy.push(arr[i])
    }

    //parse back to num
    return parseInt(copy.join(""),2)
};