# How many numbers are smaller than the current number?

Here's a [link](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/) to this challenge.

## Problem

The task is straightforward:
- for each number in the array `nums`, count how many numbers are smaller than it
- return the result array

## Solution

The key observation is that we have a small range of numbers (0 <= nums[i] <= 100).

For this reason, we can create a `count_lower` array of size 101 and count the number of occurrences of each number.

Then we can go through the `nums` array and for each number, we can sum the values in the `count_lower` array up to that number.

Here's a full solution in C++:

```c++
vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
    vector<int> count_lower(101, 0);
    vector<int> result(nums.size(), 0);

    for (int i = 0; i < nums.size(); i++) {
        for (int j = nums[i] + 1; j < 101; j++) {
            count_lower[j]++;
        }
    }

    for (int i = 0; i < nums.size(); i++) {
        result[i] = count_lower[nums[i]];
    }

    return result;
}
```

## Analysis

**Problem difficulty**: easy

**Problem type**: sorting (counting)

**Time complexity**: O(n)
