function stockmax(prices: number[]): number {
  if (!prices || !prices.length) {
    return 0;
  }

  let profit: number = 0;
  let last_max: number = prices[prices.length - 1];

  for (let i = prices.length - 2; i >= 0; i--) {
    if (prices[i] > last_max) {
      last_max = prices[i];
    } else {
      profit += last_max - prices[i];
    }
  }

  return profit;
}
