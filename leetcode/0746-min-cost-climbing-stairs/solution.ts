function minCostClimbingStairs(cost: number[]): number {
  const dp: number[] = Array.from<number>({ length: cost.length + 2 }).fill(
    Infinity
  );

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
  }

  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}
