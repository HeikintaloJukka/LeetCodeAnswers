function climbStairs(n: number): number {
    let memo = new Array(n+1).fill(0)
    return climb_stairs(0,n,memo)
};

function climb_stairs(i,n,memo){
    console.log("|||||||||||")
    console.log(memo)
    if(i>n) return 0;
    if(i === n) return 1;
    if(memo[i] > 0) return memo[i];
    memo[i] = climb_stairs(i+1,n,memo) + climb_stairs(i+2,n,memo)
    console.log("----------")
    console.log(memo)
    return memo[i]
}