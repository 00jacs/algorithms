# Insertion sort pt. 2

Here's a [link](https://www.hackerrank.com/challenges/insertionsort2/problem) to this challenge.

## Solution

Similarly to [Insertion Sort pt. 1](https://www.hackerrank.com/challenges/insertionsort1/problem), the solution is explained in the problem statement.

What we do is the following:

1. For each element in the array (from `1 - n`) with index `i` (`arr[i]`)
  1.1. Until all the elements before `i` (`0, 1, 2, ..., i`) are larger than `arr[i]`, we swap the elements.
  1.2. After each iteration, print the entire array

## Analysis

**Problem difficulty**: easy

**Problem type**: implementation

**Time complexity**: O(n)
