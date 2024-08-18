def stockmax(prices):
    if len(prices) == 0:
        return 0

    profit = 0
    last_highest = prices[-1]
    for i in reversed(range(0, len(prices) - 1)):
        price = prices[i]

        if price > last_highest:
            last_highest = price
        else:
            profit += last_highest - price

    return profit
