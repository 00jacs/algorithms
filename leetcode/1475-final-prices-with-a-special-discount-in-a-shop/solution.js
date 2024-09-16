/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const ans = new Array(prices.length);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    while (stack.length && stack[stack.length - 1][0] >= price) {
      const top = stack[stack.length - 1];
      ans[top[1]] = top[0] - price;
      stack.pop();
    }

    stack.push([price, i]);
  }

  for (let i = 0; i < stack.length; i++) {
    ans[stack[i][1]] = stack[i][0];
  }

  return ans;
};
