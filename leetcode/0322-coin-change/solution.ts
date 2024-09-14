function coinChange(coins: number[], amount: number): number {
  coins.sort((a, b) => a - b); // not sure if necessary
  // console.log(coins);

  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin > i) break;

      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  // console.log(dp);
  return dp[amount] == Infinity ? -1 : dp[amount];
}
