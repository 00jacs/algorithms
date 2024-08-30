# 525. Contiguous Array

## Solution

We need to find the longest subarray with equal number of 0's and 1's.

The idea here is to keep track of the `sum`, where we increment the `sum` by 1 if we encounter a `1` and decrement the `sum` by 1 if we encounter a `0`.

**Example**:
- nums = [ 0, 1,  0, 1, 1, 1, 0]
- sums = [-1, 0, -1, 0, 1, 2, 1]

Have you noticed that the subarray for which the `sum` is valid has a `sum` of 0?

We can use the idea and keep track of the sum and the index where we first encountered the sum (with a hash map).

We can track the sum this way:

```c++
for (int i = 0; i < nums.size(); i++) {
    sum += nums[i] == 0 ? -1 : 1;
}
```

And we can define our hash map this way:

```c++
unordered_map<int, int> idx;
```

Now, we can iterate over the array and update the `max_len`:

```c++
int max_len = 0;
for (int i = 0; i < nums.size(); i++) {
    // if sum == 0, update our answer!
    if (sum == 0) {
        max_len = max(max_len, i + 1);
    } else if (idx.find(sum) == idx.end()) {
        // we have encountered this sum for the first time!
        // add it to our hash map!
        idx[sum] = i;
    } else {
        // we have encountered this sum for the Xth time
        // thus, we can remove the indexes from 0 to idx[sum] in order for the sum
        // of our [idx[sum], ..., i] subarray to have a sum of 0 (valid contiguous subarray
        // with equal number of 0's and 1's)
        max_len = max(max_len, i - idx[sum]);
    }
}
```

And at the end, we just need to return the answer.

Trying out different methods and experimenting with pen & paper is crucial in this problem as it's not a schematic problem/solution.

## Analysis

**Problem difficulty**: medium

**Problem type**: arrays

**Time complexity**: O(n)
