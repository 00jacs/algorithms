# Sort Colors

Here's a [link](https://leetcode.com/problems/sort-colors) to this challenge.

## Problem

The problem is clearly stated: we have an array `nums` with `n` objects colored red, white, or blue (0, 1, 2).

We need to sort this array in-place.

## Solution

It's a sorting problem - we could of course use sort(), mergesort, or quicksort.

BUT the key observation here is that the number of values is small (0, 1, 2).

For this reason, we can use the counting sort which in this case can work in linear time.

Steps for this algorithm:

1. Go through all the "n" elements of the array and count the number of 0s, 1s, and 2s.

2. Go through the "counts" array and update the original array (0s should be first, then 1s, then 2s).

Here's the code:

```c++
void sortColors(vector<int>& nums) {
    int count[3];

    for (int i = 0; i < nums.size(); i++) {
        count[nums[i]]++;
    }

    int idx = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < count[i]; j++) {
            nums[idx++] = i;
        }
    }
}
```

## Analysis

**Problem difficulty**: easy

**Problem type**: sorting

**Time complexity**: O(n)
