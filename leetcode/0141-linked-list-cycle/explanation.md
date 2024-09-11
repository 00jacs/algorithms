# 141. Linked List Cycle

Here's a [link](https://leetcode.com/problems/linked-list-cycle/) to the problem.

## Problem

Given a linked list, determine if it has a cycle in it.

## Solution

The problem is a classic example of [fast & slow pointer](https://medium.com/@arifimran5/fast-and-slow-pointer-pattern-in-linked-list-43647869ac99) which is a common methodology of solving linked list-related problems.

In short:

- we are keeping a pointer `slow` that moves (usually) one step at a time
- we are keeping a pointer `fast` that moves (usually) two steps at a time

In this case, if there is a cycle in the linked list, the `fast` pointer will eventually catch up with the `slow` pointer.

If there is no cycle, the `fast` pointer will reach `nullptr` and we can return `false`.

Here's the code:

```cpp
bool hasCycle(ListNode *head) {
    if (!head) {
        return false;
    }

    ListNode *slow = head;
    ListNode *fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;

        if (slow == fast) {
            return true;
        }
    }

    return false;
}
```

## Analysis

**Problem difficulty**: easy

**Problem type**: linked list, fast & slow pointers

**Time complexity**: O(n)

## Similar problems

- [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
