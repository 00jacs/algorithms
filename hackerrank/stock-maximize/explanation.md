# Stock Maximize

Here's a [link](https://www.hackerrank.com/challenges/stockmax/problem) to this challenge.

## Solution

It seems like a relatively easy dp problem.

The solution is based on the following observations:

- order matters, we cannot sort the array of prices
- if we traverse the array from right to left, it becomes easier to analyze

If you actually take a piece of paper and write down 5 examples manually by hand and go through them, the solution will seem trivial.

The solution is as follows:
- we traverse from right to left
- we keep track of the maximum price we have seen so far
- if the current price is less than the maximum price we have seen so far, we buy the stock
- if the current price is greater than the maximum price we have seen so far, we sell the stock (and update the profit with `profit += max_price - current_price`)

A single loop solves this problem.

## Analysis

**Problem difficulty**: easy/medium

**Problem type**: dynamic programming

**Time complexity**: O(n)
