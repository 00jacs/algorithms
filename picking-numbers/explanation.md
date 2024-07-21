# Picking numbers

Here's a [link](https://www.hackerrank.com/challenges/picking-numbers/problem) to this challenge.

## Solution

We are trying to build the longest array possible with elements like `[x, x + 1]`.

The solution comes down to counting how many elements could an array like that have if we start from `x` where `x` is any element in the array that we're given.

### Example

Let's say we're given:

```
[1, 1, 2, 2, 4, 4, 5, 5, 5]
```

Let's go through the array one by one and count:
```
result starting from 1, array of (1, 2): 0
result starting from 2, array of (2, 3): 0
result starting from 3, array of (3, 4): 0
result starting from 4, array of (4, 5): 0
result starting from 5, array of (5, 6): 0
```

We can iterate through each element of the array one by one and increment the `result[num]` and `result[num - 1]`.

After going through the array, we can find the maximum value in the `result` array.

This will be our result array at the end:
```
result starting from 1, array of (1, 2): 4
result starting from 2, array of (2, 3): 2
result starting from 3, array of (3, 4): 2
result starting from 4, array of (4, 5): 5 << this is our answer
result starting from 5, array of (5, 6): 3
```

## Analysis
**Problem difficulty**: easy
**Problem type**: array
**Time complexity**: O(n)
