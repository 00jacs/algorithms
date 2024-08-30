# 2260. Minimum Consecutive Cards to Pick Up

## Solution

1. We can use a HashMap to store the LAST INDEX OF EACH ENCOUNTERED VALUE.

2. We can iterate through all the numbers in our array and check if the `number` is in the HashMap.

3. If yes, then we can update our answer by `max_len = max(max_len, i - idx[num] + 1)`.

4. Regardless of yes/no, we can update the `idx[num] = i`.

## Analysis

**Problem difficulty**: easy

**Problem type**: hashmaps/arrays

**Time complexity**: O(n)
