/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let dp = new Array(prices.length + 1);

  for (let i = 0; i <= prices.length; i++) {
    dp[i] = [0, 0];
  }

  for (let day = prices.length - 1; day >= 0; day--) {
    // dp[day][0] - maximum profit till day, without holding the stock
    dp[day][0] = Math.max(
      dp[day + 1][0], // skip transaction, do nothing
      dp[day + 1][1] - prices[day] // buy the stock today
    );

    // dp[day][1] - maximum profit till day, with holding the stock (purchase)
    dp[day][1] = Math.max(
      dp[day + 1][1], // skip transaction, do nothing
      dp[day + 1][0] + prices[day] - fee // sell the stock today with a fee
    );
  }

  console.log(dp);

  return dp[0][0];
};
