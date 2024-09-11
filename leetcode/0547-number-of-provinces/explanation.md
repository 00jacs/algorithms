# 547. Number of Provinces

Here's a [link](https://leetcode.com/problems/number-of-provinces) to the problem.

---

## Solution

This can easily be solved with DFS:

1. Initialize `seen` array of length `n` so that we can see which nodes we have already visited.

2. Iterate over 0 to `n - 1` and see if the node has been visited or not. If not, run `dfs` on it - the `dfs` function should mark all the visited nodes as `seen`. Increment our answer by 1.

3. We repeat that until all the nodes in the graph are visited.

**Code in Python**:

```python
def findCircleNum(self, is_connected: List[List[int]]) -> int:
    n = len(is_connected)
    seen = [False] * n

    def dfs(root: int):
        seen[root] = True

        for i in range(n):
            if is_connected[root][i] and not seen[i]:
                dfs(i)

    ans = 0

    for i in range(n):
        if not seen[i]:
            ans += 1
            dfs(i)

    return ans
```

---

## Analysis

**Problem difficulty**: easy

**Problem type**: graphs, DFS

**Time complexity**: O(n^2)
