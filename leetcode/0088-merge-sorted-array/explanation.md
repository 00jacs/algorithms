# Merge Sorted Array

Here's a [link](https://leetcode.com/problems/merge-sorted-array/description/) to this challenge.

## Problem

The task is simple:
- we have two sorted arrays `nums1` and `nums2`
- we need to merge them into `nums1` and keep it sorted

## Solution

The solution is straightforward:
- keep two pointers `i` (to `nums1`) and `j` (to `nums2`)
- compare the elements at `i` and `j`
- add the smaller element to the result array
- increment the pointer of the smaller element
- repeat until we reach the end of one of the arrays

Which looks like this:

```c++
while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
        result[last++] = nums1[i++];
    } else {
        result[last++] = nums2[j++];
    }
}
```

But what if one of the arrays is longer than the other?

In that case, we need to copy the remaining elements from the longer array to the result array.

```c++
while (i < m) {
    result[last++] = nums1[i++];
}

while (j < n) {
    result[last++] = nums2[j++];
}
```

After we have done  it, we can copy the result array back to `nums1`.

```c++
for (int i = 0; i < m + n; i++) {
    nums1[i] = result[i];
}
```

And we have our solution.

## Analysis

**Problem difficulty**: easy

**Problem type**: sorting

**Time complexity**: O(n + m)
