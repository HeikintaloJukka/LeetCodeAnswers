function convertToTitle(columnNumber: number): string {
    let firstChar = "A".charCodeAt(0)
    let result = ""

    while(columnNumber > 0){
        columnNumber--
        result = String.fromCharCode(columnNumber % 26+firstChar) + result

        columnNumber = Math.floor(columnNumber / 26)

    }
    return result
};