import math
import os
import random
import re
import sys

def stockmax(prices):
    if len(prices) == 0:
        return 0

    # Observations
    # 1. Seems like a dp problem
    # 2. Sorting will most likely not help (order is important)

    # Examples
    # 1 2 3 3 2 4 8
    # 1 7 1 8 1 9
    # 1 9 1 9 1 9

    # Observation from examples
    # If we traverse the list from the end, we can keep track of the highest price
    # If the current price is less than the highest price, we can sell the stock at the highest price
    # If the current price is greater than the highest price, we can update the highest price

    profit = 0
    last_highest = prices[-1]
    for i in reversed(range(0, len(prices) - 1)):
        price = prices[i]

        if price > last_highest:
            last_highest = price
        else:
            profit += last_highest - price

    return profit

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        prices = list(map(int, input().rstrip().split()))

        result = stockmax(prices)

        fptr.write(str(result) + '\n')

    fptr.close()
