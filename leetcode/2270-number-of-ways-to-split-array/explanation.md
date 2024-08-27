# 2270. Number of Ways to Split Array

Here's a [link](https://leetcode.com/problems/number-of-ways-to-split-array/) to the problem.

## Solution

The key observation in this problem is noticing that prefix sums will allow us to solve this in linear time O(n).

Here's the plan:

- calculate the prefix sums for the input array
- then, we can calculate `leftSum`, `rightSum` in O(1) for each `1 <= i <= nums.size()` index which will indicate our split
- if `leftSum >= rightSum`, we increment our `ans` variable counter
- return `ans`

Here's a code snippet:

```c++
int waysToSplitArray(vector<int>& nums) {
    if (nums.size() == 0) {
        return 0;
    }

    vector<long long> prefix(nums.size(), 0);
    prefix[0] = nums[0];

    for (int i = 1; i < nums.size(); i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }

    // how many valid splits?
    int ans = 0;

    // is is going to be our "split point"
    for (int i = 1; i < nums.size(); i++) {
        long long left_sum = prefix[i - 1];
        long long right_sum = prefix[nums.size() - 1] - left_sum;

        if (left_sum >= right_sum) {
            ans++;
        }
    }

    return ans;
}
```

## Analysis

**Problem difficulty**: easy/medium

**Problem type**: arrays

**Time complexity**: O(n)
