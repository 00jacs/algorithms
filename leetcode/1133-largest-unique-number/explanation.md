# 1133 - Largest Unique Number

## Solution

Keep count of the frequencies of each number in the `nums` input array.

Then, iterate over each number and check if the frequency is `1`. If yes, update the answer: `ans = max(ans, num);`

A **key observation** is that nums are in range (0, 1000) - meaning that we can keep the frequency count in a simple array of this size.

Here's a code snippet:

```c++
int largestUniqueNumber(vector<int>& nums) {
    vector<int> freq(1001, 0);
    for (int num : nums) {
        freq[num]++;
    }

    int ans = -1;
    for (int num : nums) {
        if (freq[num] == 1) {
            ans = max(ans, num);
        }
    }

    return ans;
}
```

## Analysis

**Problem difficulty**: easy

**Problem type**: arrays

**Time complexity**: O(n)
