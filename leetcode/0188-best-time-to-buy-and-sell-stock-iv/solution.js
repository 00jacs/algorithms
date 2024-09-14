/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const dp = new Array(prices.length + 1);

  for (let day = 0; day <= prices.length; day++) {
    dp[day] = [];
    dp[day].push(new Array(k + 1).fill(0));
    dp[day].push(new Array(k + 1).fill(0));
  }

  // dp[day][holding - 0/1][remaining]
  // maximum profit on day, when holding or not, with remaining transactions

  for (let day = prices.length - 1; day >= 0; day--) {
    for (let remain = 1; remain <= k; remain++) {
      for (let holding = 0; holding <= 1; holding++) {
        let buyOrSellScore = 0;

        if (!holding) {
          // if not holding, buy
          buyOrSellScore = -prices[day] + dp[day + 1][1][remain];
        } else {
          buyOrSellScore = prices[day] + dp[day + 1][0][remain - 1];
        }

        let skipScore = dp[day + 1][holding][remain];
        dp[day][holding][remain] = Math.max(buyOrSellScore, skipScore);
      }
    }
  }

  return dp[0][0][k];
};
