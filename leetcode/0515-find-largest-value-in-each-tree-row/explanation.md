# 515. Find Largest Value in Each Tree Row

Here's a [link](https://leetcode.com/problems/find-largest-value-in-each-tree-row/) to the problem.

---

## Solution

This can be solved easily with a [BFS](https://en.wikipedia.org/wiki/Breadth-first_search) - it's one of the most basic applications of BFS (to travers each level).

Here are the steps:

1. We will use a queue to store the nodes of the current level.
2. At each step of the iteration for a given row, we will store the `max_val` and update it with `max_val = max(max_val, node->val)`.
3. We will iterate over the current level and store the next level in the queue (standard BFS).
4. At the end of our `for` loop, we will store the `max_val` in the `ans` array.
4. At the end, when the `queue` is empty, We will return the `ans` array.

```python
ans = []
queue = deque([root])

while queue:
    nodes_in_current_level = len(queue)
    ans.append(queue[-1].val)

    for i in range(nodes_in_current_level):
        node = queue.popleft()

        if node.left:
            queue.append(node.left)

        if node.right:
            queue.append(node.right)

return ans
```

---

## Analysis

**Problem difficulty**: easy

**Problem type**: binary tree, BFS

**Time complexity**: O(n)

---

## Similar problems

- [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
