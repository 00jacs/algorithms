# 1302. Deepest Leaves Sum

Here's a [link](https://leetcode.com/problems/deepest-leaves-sum/) to the problem.

---

## Solution

This can be solved easily with a [BFS](https://en.wikipedia.org/wiki/Breadth-first_search) - it's one of the most basic applications of BFS (to travers each level).

Here are the steps:

1. We will use a queue to store the nodes of the current level.
2. At each step of the iteration for a given row, we will store the `sum_on_level` and update it with `sum_on_level += node.val`.
3. We will iterate over the current level and store the next level in the queue (standard BFS).
4. At the end, when the `queue` is empty, We will return the `sum_on_level` - which will be the sum of our deepest leaves (the last iteration!)

```python
queue = deque([root])
sum_on_level = 0

while queue:
    nodes_in_current_level = len(queue)
    sum_on_level = 0

    for i in range(nodes_in_current_level):
        node = queue.popleft()

        sum_on_level += node.val

        if node.left:
            queue.append(node.left)

        if node.right:
            queue.append(node.right)

return sum_on_leve
```

---

## Analysis

**Problem difficulty**: easy

**Problem type**: binary tree, BFS

**Time complexity**: O(n)

---

## Similar problems

- [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
- [515. Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
