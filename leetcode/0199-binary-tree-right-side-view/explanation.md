# 199. Binary Tree Right Side View

Here's a [link](https://leetcode.com/problems/binary-tree-right-side-view/) to the problem.

---

## Problem

Problem could be formulated the following way: Given a graph, return the most right node of each level.

---

## Solution

This can be solved easily with a [BFS](https://en.wikipedia.org/wiki/Breadth-first_search) - it's one of the most basic applications of BFS (to travers each level).

Here are the steps:

1. We will use a queue to store the nodes of the current level.
2. At each step of the iteration, we will store the last node of the current level in `ans` array.
3. We will iterate over the current level and store the next level in the queue.
4. At the end, when the `queue` is empty, We will return the `ans` array.

---

## Analysis

**Problem difficulty**: easy

**Problem type**: binary tree, BFS

**Time complexity**: O(n)

## Similar problems

- [515. Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
