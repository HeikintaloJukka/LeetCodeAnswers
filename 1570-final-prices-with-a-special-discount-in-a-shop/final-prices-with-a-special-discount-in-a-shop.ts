function finalPrices(prices: number[]): number[] {
    let stack = []
    let result = prices.slice()
    for(let i=0;i<prices.length;i++){
        while(stack.length > 0 && prices[stack[stack.length-1]] >= prices[i]){
            result[stack[stack.length-1]] -= prices[i]
            stack.pop()
        }
        stack.push(i)
    }

    return result
};