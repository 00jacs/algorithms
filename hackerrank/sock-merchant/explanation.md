# Sock Merchant

Here's a [link](https://www.hackerrank.com/challenges/sock-merchant/problem) to this challenge.

## Solution

Let's start with the following observations:
- n <= 100 so we can create an array `count[100]` which would keep count of the number of socks for each color
- we can iterate through the array and increment the count for each color
- we can then iterate through the count array and divide each count by 2 to get the number of pairs for each color

However, there's a simpler & faster approach:
- each time the count for a color is even, we can increment the number of pairs by 1 and reset the count to 0

## Analysis

**Problem difficulty**: easy

**Problem type**: implementation

**Time complexity**: O(n)
