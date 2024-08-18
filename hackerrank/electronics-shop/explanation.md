# Electronics Shop

Here's a [link](https://www.hackerrank.com/challenges/electronics-shop/problem) to this challenge.

## Problem

1. We need to find an item in array A (keyboards) and an item in array B (USB drives) which sum up to a value less than or equal to a given budget.

2. We need to find the maximum sum of the two items.

## Solution

As the size of A and B is less than a 1000, we can iterate through all the possible combinations of items in A and B.

We can iterate through all the items in A and B and check if the sum of the two items is less than or equal to the budget and if it's greater than the maximum sum we've found so far.

If it is, we update the maximum sum.

```python
result = -1
for keyboard in keyboards:
    for drive in drives:
        if keyboard + drive <= b:
            result = max(result, keyboard + drive)

return result
```

## Analysis

**Problem difficulty**: easy

**Problem type**: implementation

**Time complexity**: O(n * m)
