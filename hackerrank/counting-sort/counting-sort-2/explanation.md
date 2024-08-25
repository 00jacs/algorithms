# Counting Sort - pt. 2

Here's a [link](https://www.hackerrank.com/challenges/countingsort2/problem?isFullScreen=true) to the problem.

## Problem

We need to sort the array of elements where 0 <= a[i] < 100.

## Solution

Extend the solution of the `counting-sort-1` and populate the original array based on the frequency array.

## Code

```c++
vector<int> countingSort(vector<int> arr) {
    vector<int> freq(100, 0);

    for (int i = 0; i < arr.size(); i++) {
        freq[arr[i]]++;
    }

    int idx = 0;
    for (int i = 0; i < 100; i++) {
        for (int j = 0; j < freq[i]; j++) {
            arr[idx++] = i;
        }
    }

    return arr;
}
```

## Analysis

**Problem difficulty**: easy
**Problem type**: sorting
**Time complexity**: O(n)
