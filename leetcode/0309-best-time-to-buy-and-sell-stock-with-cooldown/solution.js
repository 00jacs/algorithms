/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = new Array(prices.length + 2);

  for (let i = 0; i <= prices.length + 1; i++) {
    dp[i] = new Array(2);
    dp[i][0] = 0;
    dp[i][1] = 0;
  }

  // dp[day][holding] - maximum profit

  for (let day = prices.length - 1; day >= 0; day--) {
    dp[day][0] = Math.max(
      dp[day + 1][0], // skip
      dp[day + 1][1] - prices[day] // buy (cooldown with buying)
    );

    dp[day][1] = Math.max(
      dp[day + 1][1], // skip
      dp[day + 2][0] + prices[day] // sell stock
    );
  }

  return dp[0][0];
};
