# Counting Sort - pt. 1

Here's a [link](https://www.hackerrank.com/challenges/countingsort1/problem?isFullScreen=true) to the problem.

## Problem

Create a frequency array (assume that elements are in range 0-100) for a given array and return it.

## Solution

Go over the array and count the number of occurrences of each element.

## Code

```c++
vector<int> countingSort(vector<int> arr) {
    vector<int> freq(100, 0);

    for (int i = 0; i < arr.size(); i++) {
        freq[arr[i]]++;
    }

    return freq;
}
```

## Analysis

**Problem difficulty**: easy
**Problem type**: sorting
**Time complexity**: O(n)
