# 141. Linked List Cycle

Here's a [link](https://leetcode.com/problems/middle-of-the-linked-list/) to the problem.

## Problem

Given a linked list, return its middle node.

## Solution

The problem is a classic example of [fast & slow pointer](https://medium.com/@arifimran5/fast-and-slow-pointer-pattern-in-linked-list-43647869ac99) which is a common methodology of solving linked list-related problems.

In short:

- we are keeping a pointer `slow` that moves (usually) one step at a time
- we are keeping a pointer `fast` that moves (usually) two steps at a time

In this case, when our `fast` pointer will reach the end of the linked list, our `slow` pointer will be at the middle of the linked list.

Thus, we can just return our `slow` pointer.

Here's the code:

```cpp
ListNode* middleNode(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;

    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next;
        fast = fast->next;
    }

    return slow;
}
```

## Analysis

**Problem difficulty**: easy

**Problem type**: linked list, fast & slow pointers

**Time complexity**: O(n)

## Similar problems

- [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
