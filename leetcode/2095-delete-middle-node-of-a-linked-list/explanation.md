# 2095. Delete Middle Node of a Linked List

Here's a [link](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list) to the problem.

## Problem

Given a linked list, delete its middle node and return the new linked list.

## Solution

The problem is a classic example of [fast & slow pointer](https://medium.com/@arifimran5/fast-and-slow-pointer-pattern-in-linked-list-43647869ac99) which is a common methodology of solving linked list-related problems.

If you solve the problem [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/), you can easily solve this problem.

In short:

- we are keeping a pointer `slow` that moves (usually) one step at a time
- we are keeping a pointer `fast` that moves (usually) two steps at a time

In this case, when our `fast` pointer will reach the end of the linked list, our `slow` pointer will be at the middle of the linked list.

With a slight modification (starting from `fast = head.next`), we can get the previous node of the middle node.

Then, we can easily remove the middle node by updating the pointer from the previous node to the next node after the middle node:

```python
slow.next = slow.next.nex
```

## Analysis

**Problem difficulty**: easy

**Problem type**: linked list, fast & slow pointers

**Time complexity**: O(n)

## Similar problems

- [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
- [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
