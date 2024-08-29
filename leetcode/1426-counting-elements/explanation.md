# 1426 - Counting Numbers

## Solution

1. We can use a HashSet to store all the numbers which will take O(n).

2. We can iterate through all the numbers in our array and check if the `number + 1` is in the HashSet - O(1) * O(n).

3. If the `number + 1` is in the HashSet, increment our answer.

4. If not, continue the iteration.

## Analysis

**Problem difficulty**: easy

**Problem type**: sets/arrays

**Time complexity**: O(n)
