/**
 * Definition for read4()
 * read4 = function(buf4: string[]): number {
 *     ...
 * };
 */

var solution = function(read4: any) {
    let internalBuf = []
    return function(buf: string[], n: number): number {
        let readChars = 0
        while(n>0){
            if(internalBuf.length === 0){
                if(read4(internalBuf) === 0){
                    return readChars
                }
            }

            buf.push(internalBuf.shift())
            readChars++
            n--
        }
        return readChars
    };
};